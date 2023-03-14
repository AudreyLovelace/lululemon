import { combineReducers } from "redux";
import { lululemonReducer } from "./lululemonReducer";
import { cartReducer } from "./cartReducer";
export default combineReducers({ lululemonReducer, cartReducer });
