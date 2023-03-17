import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import {BrowserRouter} from "react-router-dom";

const reduxStore = createStore(reducers);



ReactDOM.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
);
