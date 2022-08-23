import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import Views from './views';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Views />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
