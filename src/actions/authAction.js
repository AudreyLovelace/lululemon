// import { types } from "../helpers/consts";
import axios from "axios";
export const authType = { signedIn: "SIGNED-IN", signedOff: "SIGNED-OFF" };
// export const nestAxios = axios.create();
export const nestAxios = axios.create({
  withCredentials: true,
  //   crossorigin: true,
});
export const authAction = {
  signedIn() {
    return {
      type: authType.signedIn,
    };
  },
  signedOff() {
    return {
      type: authType.signedOff,
    };
  },
};
