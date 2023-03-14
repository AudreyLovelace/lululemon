import { FETCH_ALL_IMAGES } from "../helper/constants";

const initState = {
  imgLibrary: [],
  currentIndex: 0,
  keyWord: null,
};

export const cityViewReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_IMAGES:
      return { ...state, imgLibrary: action?.payload };

    default:
      return state;
  }
};
