export const cartTypes = { addToCart: "ADD_TO_CART", clearNew: "CLEAR_NEW" };
export const cartAction = {
  addToCart(productData) {
    return { type: cartTypes.addToCart, payload: productData };
  },
  clearNew() {
    return { type: cartTypes.clearNew };
  },
};
