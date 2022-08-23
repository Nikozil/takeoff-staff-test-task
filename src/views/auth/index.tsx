import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from '../../components/shared-components/Loading';
import { AUTH_PREFIX_PATH } from '../../config/RoutingConfig';

const Auth = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          path={`${AUTH_PREFIX_PATH}/login`}
          component={lazy(() => import(`./Login`))}
        />

        <Redirect
          from={`${AUTH_PREFIX_PATH}`}
          to={`${AUTH_PREFIX_PATH}/login`}
        />
      </Switch>
    </Suspense>
  );
};

export default Auth;
