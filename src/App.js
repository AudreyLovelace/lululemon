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
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WhatsNew />}>
        <Route path="blogs" element={<></>} />
        <Route path="/books/:id" element={<></>} />
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
}
