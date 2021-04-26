import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import configureStore from "./configureStore";
import history from "./utils/history";

const AppContainer = () => {
  const initialState = {};
  const store = configureStore(initialState, history);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default AppContainer;
