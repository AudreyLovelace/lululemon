import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./app.scss";

import WhatsNew from "./WhatsNew";
import ProductPage from "./components/product/ProductPage";
import Cart from "./components/cart/Cart";
import { Login } from "./components/login/Login";
import { QRCode } from "./components/QRcode/QRcode";
import Signin from "./components/auth/signin";
import ShipAddress from "./components/address/ship";
import { authAction, nestAxios } from "./actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./components/auth/checkout";
import ThankYou from "./components/auth/thankyou";

export default function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.signedIn);

  useEffect(() => {
    window.scrollTo(0, 0);
    nestAxios
      .get("http://localhost:3000/auth/whoami")
      .then((res) => {
        // console.log(res.data.email);

        dispatch(authAction.whoAmI(res.data.email));
      })
      .catch((e) => {
        dispatch(authAction.signedOff());
      });
  }, [pathname, auth]);

  const [tokenData, setTokenData] = useState(null);
  const handleShowToken = (data) => {
    setTokenData(data);
  };

  return (
    <Routes>
      <Route path="/" element={<WhatsNew dataFromApp={tokenData} />} />
      <Route path="/p/:productId/:colorId" element={<ProductPage />} />
      <Route path="/p/:productId/" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login/:create" element={<Signin />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/ship" element={<Checkout />} />
      <Route path="/thankyou/:order" element={<ThankYou />} />
    </Routes>
  );
}
