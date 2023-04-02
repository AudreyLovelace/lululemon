export const cartTypes = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
};
export const cartAction = {
  addToCart(productData) {
    return { type: cartTypes.addToCart, payload: productData };
  },
  removeFromCart(index) {
    return { type: cartTypes.removeFromCart, payload: index };
  },
};
