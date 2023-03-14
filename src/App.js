import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<></>}>
        <Route index element={<></>} />
        <Route path="blogs" element={<></>} />
        <Route path="/books/:id" element={<></>} />
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
}
