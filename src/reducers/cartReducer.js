import { cartTypes } from "../actions/cartAction";
const initState = [];
export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.addToCart:
      console.log(action.payload);
      return [...state, action?.payload];
    default:
      return state;
  }
};
