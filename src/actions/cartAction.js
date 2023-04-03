export const cartTypes = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  changeQuantity: "CHANGE_QUANTITY",
};
export const cartAction = {
  addToCart(productData) {
    return { type: cartTypes.addToCart, payload: productData };
  },
  removeFromCart(index) {
    return { type: cartTypes.removeFromCart, payload: index };
  },
  changeQuantity(index, quantity) {
    return {
      type: cartTypes.changeQuantity,
      payload: { index: index, quantity: quantity },
    };
  },
};
