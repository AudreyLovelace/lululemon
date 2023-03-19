import { filterTypes } from "../actions/filterAction";

const initState = [];
export const lululemonReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.initProducts:
      // console.log(action.payload);

      return action?.payload;

    default:
      return state;
  }
};
