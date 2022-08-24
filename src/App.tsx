import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import Views from './views';
import ruRu from 'antd/lib/locale-provider/ru_RU';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider locale={ruRu}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Views />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
