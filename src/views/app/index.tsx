import { useAppSelector } from 'hooks/redux-hooks';
import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectToken } from 'redux/selectors/Auth';
import Loading from '../../components/shared-components/Loading';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from '../../config/RoutingConfig';
import Layout from './Layout';

const App = () => {
  const isAuth = useAppSelector(selectToken);

  if (!isAuth) {
    return <Redirect to={AUTH_PREFIX_PATH} />;
  }

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            path={`${APP_PREFIX_PATH}/contacts-list`}
            component={lazy(() => import(`./ContactsPage`))}
          />

          <Redirect
            from={`${APP_PREFIX_PATH}`}
            to={`${APP_PREFIX_PATH}/contacts-list`}
          />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
