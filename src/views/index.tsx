import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from '../config/RoutingConfig';
import Auth from './auth';

const Views: React.FC = () => {
  const isAuth = false;
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
    </Switch>
  );
};

export default Views;
