import { authType } from "../actions/authAction";
const initState = { signedIn: false, email: null };
export const authReducer = (state = initState, action) => {
  // console.log(action);

  switch (action.type) {
    case authType.signedIn:
      return { ...state, signedIn: true };
    case authType.signedOff:
      return { ...state, signedIn: false, email: null };
    case authType.whoAmI:
      // console.log(action.payload);

      return { ...state, signedIn: true, email: action.payload };
    default:
      return state;
  }
};
