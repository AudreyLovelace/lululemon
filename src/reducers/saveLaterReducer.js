import { cartTypes } from "../actions/cartAction";
// const initState = [];
const initState =
  localStorage.getItem("later") !== null
    ? JSON.parse(localStorage.getItem("later"))
    : [];
export const saveLaterReducer = (state = initState, action) => {
  //   console.log(state);

  switch (action.type) {
    case cartTypes.updateLaterItem:
      state[action.payload.index] = action.payload.cartInfo;
      localStorage.setItem("later", JSON.stringify(state));
      //   console.log(state);
      return [...state];
    case cartTypes.addToLater:
      state.push(action.payload.cartInfo);
      localStorage.setItem("later", JSON.stringify(state));
      return [...state];
    case cartTypes.removeFromLater:
      state.splice(action.payload.index, 1);
      state = [...state];
      localStorage.setItem("later", JSON.stringify(state));
      //   console.log(state);
      return state;
    case cartTypes.removeFinalLater:
      state.splice(action.payload, 1);
      state = [...state];
      localStorage.setItem("later", JSON.stringify(state));
      //   console.log(state);
      return state;
    default:
      return state;
  }
};
