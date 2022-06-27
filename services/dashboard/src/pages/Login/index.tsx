import React, { useMemo } from 'react';
import { LoginPage, ListVariant } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { CustomLoginForm } from './CustomLoginForm';
import { validatePasswordError, validateUsernameError } from '@utils/Forms/validators';

export const CustomLoginPage = () => {
  const [state, setState] = React.useState({
    showHelperText: false,
    usernameValue: '',
    invalidUsernameText: undefined,
    passwordValue: '',
    invalidPasswordText: undefined,
    isRememberMeChecked: false,
    requireValidatePassword: false,
    requiredValidateUsername: false,
  });

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

  const onLoginButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setState({ ...state, requiredValidateUsername: true, requireValidatePassword: true });
    if (usernameError || passwordError) return;
  };
  const helperText = (
    <React.Fragment>
      <ExclamationCircleIcon />
      &nbsp;Invalid login credentials.
    </React.Fragment>
  );

  const loginForm = (
    <CustomLoginForm
      showHelperText={state.showHelperText}
      helperText={helperText}
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
