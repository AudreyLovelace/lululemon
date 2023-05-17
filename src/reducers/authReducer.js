import { authType } from "../actions/authAction";
const initState = { signedIn: false };
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authType.signedIn:
      return { signedIn: true };
    case authType.signedOff:
      return { signedIn: false };
    default:
      return state;
  }
};
