import { filterTypes } from "../actions/filterAction";
const initState = {
  recent: [],
  trending: ["long", "shirt", "short", "online", "sleeve shirt"],
};
export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.searchProducts:
      return {
        ...state,
        recent: Array.from(new Set([...state.recent, action?.payload[2]])),
      };
    case filterTypes.clearSearchHistory:
      return initState;
    default:
      return state;
  }
};
