import { types } from "../helper/constants";

const initState = {
  imgLibrary: [],
  currentIndex: 0,
  keyWord: null,
};

export const lululemonReducer = (state = initState, action) => {
  switch (action.type) {
    case types.actionName:
      return { ...state, imgLibrary: action?.payload };

    default:
      return state;
  }
};
