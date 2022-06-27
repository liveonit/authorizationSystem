import React, { useMemo } from 'react';
import { LoginPage, ListVariant } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { CustomLoginForm } from './CustomLoginForm';
import { validatePasswordError, validateUsernameError } from '@utils/Forms/validators';
import { login } from '@utils/Auth/helpers';
import { useNavigate } from 'react-router-dom';

export const CustomLoginPage = () => {
  const [state, setState] = React.useState({
    showHelperText: false,
    usernameValue: '',
    passwordValue: '',
    requireValidatePassword: false,
    requiredValidateUsername: false,
    loginError: '',
  });

  const navigate = useNavigate();

  const usernameError = useMemo(
    () => validateUsernameError(true)(state.usernameValue),
    [state.usernameValue],
  );
  const passwordError = useMemo(
    () =>
      validatePasswordError({
        digit: true,
        lowercase: true,
        uppercase: true,
        minLength: 8,
      })(state.passwordValue),
    [state.passwordValue],
  );

  const handleUsernameChange = (value: string) => {
    setState({ ...state, usernameValue: value, requiredValidateUsername: true });
  };

  const handlePasswordChange = (passwordValue: string) => {
    setState({ ...state, passwordValue, requireValidatePassword: true });
  };

  const onLoginButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (usernameError || passwordError) return;
    const result = await login(state.usernameValue, state.passwordValue);
    if (result) navigate('/', { replace: true });
    setState({
      ...state,
      requiredValidateUsername: true,
      requireValidatePassword: true,
      loginError: 'Invalid credentials',
    });
  };

  const loginForm = (
    <CustomLoginForm
      helperTextIcon={<ExclamationCircleIcon />}
      usernameLabel="Username"
      usernameValue={state.usernameValue}
      onChangeUsername={handleUsernameChange}
      invalidUsernameText={state.requiredValidateUsername ? usernameError : undefined}
      passwordLabel="Password"
      passwordValue={state.passwordValue}
      onChangePassword={handlePasswordChange}
      invalidPasswordText={state.requireValidatePassword ? passwordError : undefined}
      onLoginButtonClick={onLoginButtonClick}
      loginButtonLabel="Iniciar session"
      loginError={state.loginError}
    />
  );

  const images = {
    lg: '/images/cybersecurityBg.webp',
    sm: '/images/cybersecurityBg.webp',
    sm2x: '/images/cybersecurityBg.webp',
    xs: '/images/cybersecurityBg.webp',
    xs2x: '/images/cybersecurityBg.webp',
  };

  return (
    <LoginPage
      footerListVariants={ListVariant.inline}
      backgroundImgSrc={images}
      textContent="Este es un dashboard de ejemplo para el entregable de seguridad"
      loginTitle="Inicie sesion con su cuenta"
    >
      {loginForm}
    </LoginPage>
  );
};
