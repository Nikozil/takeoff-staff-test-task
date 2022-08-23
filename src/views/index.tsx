import { useAppSelector } from 'hooks/redux-hooks';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectToken } from 'redux/selectors/Auth';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from '../config/RoutingConfig';
import App from './app';
import Auth from './auth';

const Views: React.FC = () => {
  const isAuth = useAppSelector(selectToken);

  return (
    <Switch>
      <Route exact path="/">
        {isAuth ? (
          <Redirect to={APP_PREFIX_PATH} />
        ) : (
          <Redirect to={AUTH_PREFIX_PATH} />
        )}
      </Route>

      <Route path={AUTH_PREFIX_PATH}>
        <Auth />
      </Route>

      <Route path={APP_PREFIX_PATH}>
        <App />
      </Route>
    </Switch>
  );
};

export default Views;
