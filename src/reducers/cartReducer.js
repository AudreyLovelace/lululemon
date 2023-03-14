import { types } from "../helper/constants";
const initState = { a: 2 };
export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case types:
      return { ...state, a: action?.payload };
    default:
      return state;
  }
};
