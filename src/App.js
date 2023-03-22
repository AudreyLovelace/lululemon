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
import {useEffect} from "react";
import "./app.scss";

import WhatsNew from "./WhatsNew";
import Review from "./components/review/Review";

export default function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            {/*<Route path="/" element={<WhatsNew />}>*/}
            <Route path="/" element={<Review/>}>
                <Route path="/books/:id" element={<></>}/>
                <Route path="*" element={<></>}/>
            </Route>
        </Routes>
    );
}
