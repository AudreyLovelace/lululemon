import { combineReducers } from "redux";
import { lululemonReducer } from "./lululemonReducer";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import { sortReducer } from "./sortReducer";
import { lableReducer } from "./lableReducer";
export default combineReducers({
  lululemonReducer,
  cartReducer,
  filterReducer,
  sortReducer,
  lableReducer,
});
