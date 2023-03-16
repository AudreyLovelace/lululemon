import { filterTypes } from "../actions/filterAction";

// const initState = [];
const initState =
  localStorage.getItem("filter") !== null
    ? JSON.parse(localStorage.getItem("filter"))
    : [];
// : copiedData;

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.initFilter: {
      let filter = JSON.stringify(action.payload);
      localStorage.setItem("filter", filter);
      return action.payload;
    }
    case filterTypes.checkbox: {
      //   console.log(action.payload);

      let newState = { ...state };
      let key = action.payload[0];
      let index = action.payload[1];
      if (newState[key][index].isChecked) {
        newState[key][index].isChecked = false;
      } else {
        newState[key][index].isChecked = true;
      }
      // console.log(newState);

      let filter = JSON.stringify(newState);
      localStorage.setItem("filter", filter);
      return newState;
    }
    default:
      return state;
  }
};
