import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

import Test from "./Test";
export default function App() {
  return (
    <Routes>
      <Test />
      <Route path="/" element={<></>}>
        <Route index element={<></>} />
        <Route path="blogs" element={<></>} />
        <Route path="/books/:id" element={<></>} />
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
}
