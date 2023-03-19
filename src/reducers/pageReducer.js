import { filterTypes } from "../actions/filterAction";
const initState = {};
export const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.initProducts:
      console.log(action.payload[1]);
      return action?.payload[1];
    case filterTypes.moreProducts:
      console.log(action.payload[1]);
      return action?.payload[1];
    default:
      return state;
  }
};
