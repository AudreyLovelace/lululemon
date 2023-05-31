// import { types } from "../helpers/consts";
import axios from "axios";
export const authType = {
  signedIn: "SIGNED-IN",
  signedOff: "SIGNED-OFF",
  whoAmI: "WHO-AM-I",
};
// export const nestAxios = axios.create();
export const nestAxios = axios.create({
  withCredentials: true,
  //   crossorigin: true,
});
// nestAxios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 403) {
//       // Handle 403 error
//       // You can perform a custom action here, such as redirecting the user
//     }
//     return Promise.reject(error);
//   }
// );

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
  whoAmI(email) {
    return { type: authType.whoAmI, payload: email };
  },
};
