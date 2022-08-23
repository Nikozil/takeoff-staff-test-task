import { APP_PREFIX_PATH } from 'config/RoutingConfig';
import { useAppSelector } from 'hooks/redux-hooks';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { selectToken } from 'redux/selectors/Auth';
import LoginForm from './LoginForm';
const Login = () => {
  const isAuth = useAppSelector(selectToken);

  if (isAuth) {
    return <Redirect to={APP_PREFIX_PATH} />;
  }

  return (
    <article className="login-page">
      <LoginForm />
    </article>
  );
};

export default Login;
