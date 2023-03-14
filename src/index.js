import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// imports for redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
const reduxStore = createStore(reducers);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
