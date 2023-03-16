import { filterTypes } from "../actions/filterAction";
const initState =
  localStorage.getItem("sort") !== null
    ? JSON.parse(localStorage.getItem("sort"))
    : { id: 1, options: { 1: "one", 2: "two", 3: "three" } };

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
