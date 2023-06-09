import { combineReducers } from "redux";
import { lululemonReducer } from "./lululemonReducer";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import { sortReducer } from "./sortReducer";
import { lableReducer } from "./lableReducer";
import { pageReducer } from "./pageReducer";
import { searchReducer } from "./searchReducer";
import reviewReducer from "./reviewReducerRating";
import { oneProductReducer } from "./oneProductReducer";
import { saveLaterReducer } from "./saveLaterReducer";
export default combineReducers({
  lululemonReducer,
  cartReducer,
  filterReducer,
  sortReducer,
  lableReducer,
  pageReducer,
  searchReducer,
  reviewReducer,
  oneProductReducer,
  saveLaterReducer,
});
