import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./GlobalStyles";
import storeConfig from "./store/StoreConfig";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
