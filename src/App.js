import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./app.scss";

import WhatsNew from "./WhatsNew";
import ProductPage from "./components/product/ProductPage";
import Test from "./Test";
import {Login} from "./components/login/Login";
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WhatsNew />} />
      <Route path="/p/:productId/:colorId" element={<ProductPage />} />
      <Route path="/p/:productId/" element={<ProductPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<WhatsNew />} />
    </Routes>
  );
}
