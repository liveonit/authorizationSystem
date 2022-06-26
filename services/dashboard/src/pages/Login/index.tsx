import React from 'react';
import { LoginForm, LoginMainFooterBandItem, LoginPage, ListVariant } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export const CustomLoginPage = () => {
  const [state, setState] = React.useState({
    showHelperText: false,
    usernameValue: '',
    isValidUsername: true,
    passwordValue: '',
    isValidPassword: true,
    isRememberMeChecked: false,
  });

  const handleUsernameChange = (value: string) => {
    setState({ ...state, usernameValue: value });
  };

  const handlePasswordChange = (passwordValue: string) => {
    setState({ ...state, passwordValue });
  };

  const onRememberMeClick = () => {
    setState({ ...state, isRememberMeChecked: !state.isRememberMeChecked });
  };

  const onLoginButtonClick = (event) => {
    event.preventDefault();
    setState({
      ...state,
      isValidUsername: !!state.usernameValue,
      isValidPassword: !!state.passwordValue,
      showHelperText: !state.usernameValue || !state.passwordValue,
    });
  };
  const helperText = (
    <React.Fragment>
      <ExclamationCircleIcon />
      &nbsp;Invalid login credentials.
    </React.Fragment>
  );

  const loginForm = (
    <LoginForm
      showHelperText={state.showHelperText}
      helperText={helperText}
      helperTextIcon={<ExclamationCircleIcon />}
      usernameLabel="Username"
      usernameValue={state.usernameValue}
      onChangeUsername={handleUsernameChange}
      isValidUsername={state.isValidUsername}
      passwordLabel="Password"
      passwordValue={state.passwordValue}
      onChangePassword={handlePasswordChange}
      isValidPassword={state.isValidPassword}
      isRememberMeChecked={state.isRememberMeChecked}
      onChangeRememberMe={onRememberMeClick}
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
