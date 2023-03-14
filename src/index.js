import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
import App from "./App";

// imports for redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
const reduxStore = createStore(reducers);

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
