import { filterTypes } from "../actions/filterAction";

const initState = [];
export const lululemonReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.initProducts:
      // console.log(action.payload);
      return action?.payload[0];
    case filterTypes.moreProducts:
      return [...state, action.payload[0]];
    default:
      return state;
  }
};
