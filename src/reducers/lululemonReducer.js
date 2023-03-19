import { filterTypes } from "../actions/filterAction";
function uniqueProducts(products) {
  const uniqueProducts = products.filter((item, index) => {
    const id = item.productId;
    const i = products.findIndex((e) => {
      // console.log(e, "a");
      return e.productId === id;
    });
    // console.log(index, i);
    return index === i;
  });
  return uniqueProducts;
}
const initState = [];
export const lululemonReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.initProducts:
      // console.log(action.payload);
      return uniqueProducts(action?.payload[0]);
    case filterTypes.moreProducts:
      // console.log("a", state);
      // console.log("b", [action.payload[0]]);
      return uniqueProducts([...state, ...action.payload[0]]);
    default:
      return state;
  }
};
