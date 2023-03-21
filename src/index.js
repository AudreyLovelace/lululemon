import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { BrowserRouter } from "react-router-dom";
import { AddToHomeScreen } from "@mui/icons-material";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme";

const reduxStore = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
