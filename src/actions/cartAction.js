export const cartTypes = { addToCart: "ADD_TO_CART" };
export const cartAction = {
  addToCart(productData) {
    return { type: cartTypes.addToCart, payload: productData };
  },
};
