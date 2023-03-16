import { filterTypes } from "../actions/filterAction";
const initState =
  localStorage.getItem("sort") !== null
    ? JSON.parse(localStorage.getItem("sort"))
    : { id: 1, options: { 1: "Featured", 2: "New Arrivals", 3: "Top Rated" } };

export const sortReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.sort:
      const result = { ...state, id: action?.payload };
      const strResult = JSON.stringify(result);
      localStorage.setItem("sort", strResult);
      return result;
    default:
      return state;
  }
};
