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
import Product from "./components/product/Product";
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WhatsNew />} />
      <Route path="/p/:productId/:colorId" element={<Product />} />
      <Route path="/books/:id" element={<></>} />
      <Route path="*" element={<></>} />
    </Routes>
  );
}
