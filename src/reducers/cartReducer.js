import { cartTypes } from "../actions/cartAction";
// const initState = [];
const initState =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
export const cartReducer = (state = initState, action) => {
  // console.log(state);

  switch (action.type) {
    case cartTypes.removeFromLater:
      // console.log(action.payload);

      let samea = 0;
      state.forEach((product) => {
        if (
          product.productId === action.payload.cartInfo.productId &&
          JSON.stringify(product.size) ===
            JSON.stringify(action.payload.cartInfo.size) &&
          product.colorId === action.payload.cartInfo.colorId
        ) {
          product.quantity++;
          same++;
        }
      });
      if (!samea) {
        state = [action?.payload.cartInfo, ...state];
      }
      localStorage.setItem("cart", JSON.stringify(state));

      return state;
    case cartTypes.updateItem:
      state[action.payload.index] = action.payload.cartInfo;
      localStorage.setItem("cart", JSON.stringify(state));

      return [...state];
    case cartTypes.changeQuantity:
      state[action.payload.index].quantity = action.payload.quantity;
      localStorage.setItem("cart", JSON.stringify(state));
      // console.log(state);

      return [...state];
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

      return state;
    case cartTypes.removeFromCart:
      state.splice(action.payload, 1);
      state = [...state];
      localStorage.setItem("cart", JSON.stringify(state));

      return state;
    case cartTypes.addToLater:
      state.splice(action.payload.index, 1);
      state = [...state];
      localStorage.setItem("cart", JSON.stringify(state));

      return state;
    default:
      return state;
  }
};
