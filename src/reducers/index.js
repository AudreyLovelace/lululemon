import { combineReducers } from "redux";
import { lululemonReducer } from "./lululemonReducer";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import { sortReducer } from "./sortReducer";
export default combineReducers({
  lululemonReducer,
  cartReducer,
  filterReducer,
  sortReducer,
});
