import { filterTypes } from "../actions/filterAction";
const initState = {
  searchLink: [],
  recent: [],
  trending: ["long", "shirt", "short", "online", "sleeve shirt"],
};
export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.checkbox:
      return { ...state, searchLink: [] };
    case filterTypes.sort:
      return { ...state, searchLink: [] };
    case filterTypes.searchProducts:
      return {
        ...state,
        recent: Array.from(new Set([...state.recent, action?.payload[2]])),
        // searchLink: [],
      };
    case filterTypes.clearSearchHistory:
      return initState;
    case filterTypes.searchLink:
      // console.log("receive link");

      return { ...state, searchLink: action.payload };
    default:
      return state;
  }
};
