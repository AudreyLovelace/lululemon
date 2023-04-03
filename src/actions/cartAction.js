export const cartTypes = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  changeQuantity: "CHANGE_QUANTITY",
  updateItem: "UPDATE_ITEM",
  removeFromLater: "REMOVE_FROM_LATER",
  addToLater: "ADD_TO_LATER",
  removeFinalLater: " REMOVE_FINAL_LATER",
  updateLaterItem: "UPDATE_LATER_ITEM",
};
export const cartAction = {
  updateLaterItem(cartInfo, index) {
    return {
      type: cartTypes.updateLaterItem,
      payload: { index: index, cartInfo: cartInfo },
    };
  },
  removeFinalLater(index) {
    return {
      type: cartTypes.removeFinalLater,
      payload: index,
    };
  },
  addToLater(cartInfo, index) {
    return {
      type: cartTypes.addToLater,
      payload: { cartInfo: cartInfo, index: index },
    };
  },
  removeFromLater(cartInfo, index) {
    return {
      type: cartTypes.removeFromLater,
      payload: { cartInfo: cartInfo, index: index },
    };
  },
  updateItem(newCartInfo, index) {
    return {
      type: cartTypes.updateItem,
      payload: { cartInfo: newCartInfo, index: index },
    };
  },
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
