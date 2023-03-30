import { cartTypes } from "../actions/cartAction";
// const initState = [];
const initState =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
export const cartReducer = (state = initState, action) => {
  console.log(state);

  switch (action.type) {
    case cartTypes.addToCart:
      // console.log(action.payload);

      let same = 0;
      state.forEach((product) => {
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
        state = [action?.payload, ...state];
      }
      localStorage.setItem("cart", JSON.stringify(state));
      console.log(state);
      return state;

    default:
      return state;
  }
};
