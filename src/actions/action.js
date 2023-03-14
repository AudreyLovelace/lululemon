import { types } from "../helper/constants";

export const actions = {
  actionName(word) {
    return { types: types.actionName, payload: word };
  },
};
