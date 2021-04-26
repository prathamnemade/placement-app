import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PlacementPage } from './scenes/Placement';
import configureStore from './store';
import history from './utils/history';

const App = () => {
  const initialState = {};
  const store = configureStore(initialState, history);

  return (
    <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <Route path="/" children={<PlacementPage />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
