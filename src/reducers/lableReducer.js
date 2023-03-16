import { filterTypes } from "../actions/filterAction";

// const initState = [];
const initState =
  localStorage.getItem("lable") !== null
    ? JSON.parse(localStorage.getItem("lable"))
    : [];
// : copiedData;
//[{name,type,index}]
export const lableReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.checkbox: {
      // console.log(action.payload);
      let result = state;
      let lable = JSON.stringify(action.payload);
      const index = result.indexOf(lable);
      // console.log(index);
      // console.log(result[0] == result[1]);
      if (index === -1) {
        result.push(lable);
      } else {
        result.splice(index, 1);
        // console.log(result);
      }
      let strLable = JSON.stringify(result);
      localStorage.setItem("lable", strLable);
      return result;
    }
    default:
      return state;
  }
};
