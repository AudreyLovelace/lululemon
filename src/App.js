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

import Test from "./Test";
import {Feedback} from "./components/Feedback";
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Test />}>
        <Route path="blogs" element={<></>} />
        <Route path="/books/:id" element={<></>} />
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
}

