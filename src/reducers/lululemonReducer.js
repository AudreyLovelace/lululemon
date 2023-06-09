import { filterTypes } from "../actions/filterAction";

function uniqueProducts(products) {
  const uniqueProducts = products.filter((item, index) => {
    const id = item.productId;
    const i = products.findIndex((e) => {
      return e.productId === id;
    });
    return index === i;
  });
  return uniqueProducts;
}
const initState = [];
export const lululemonReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.initProducts:
      return uniqueProducts(action?.payload[0]);
    case filterTypes.moreProducts:
      return uniqueProducts([...state, ...action.payload[0]]);
    //case search keyword
    case filterTypes.searchProducts:
      return action.payload[0];
    default:
      return state;
  }
};
