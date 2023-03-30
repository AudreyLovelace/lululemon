import { ActionTypes } from "@mui/base";
import { cartTypes } from "../actions/cartAction";
// const initState = [];
const initState =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : { new: null, whole: [] };
export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.addToCart:
      // console.log(action.payload);
      state.new = action.payload;
      let same = 0;
      state.whole.forEach((product) => {
        if (
          product.productId === action.payload.productId &&
          JSON.stringify(product.size) ===
            JSON.stringify(action.payload.size) &&
          product.colorId === action.payload.colorId
        ) {
          product.quantity++;
          same++;
        }
      });
      if (!same) {
        state.whole = [...state.whole, action?.payload];
      }
      localStorage.setItem("cart", JSON.stringify(state));
      // console.log(state);
      return state;
    case cartTypes.clearNew:
      state = { ...state, new: null };
      localStorage.setItem("cart", JSON.stringify(state));
      // console.log(state);
      return state;
    default:
      return state;
  }
};
