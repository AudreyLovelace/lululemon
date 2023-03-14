import { FETCH_ALL_IMAGES } from "../helper/constants";

export const keyWord = (word) => {
  return {
    type: `KEY_WORD`,
    payload: word,
  };
};
