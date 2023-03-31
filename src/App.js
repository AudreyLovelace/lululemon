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
import {useEffect, useState} from "react";
import "./app.scss";

import WhatsNew from "./WhatsNew";
import ProductPage from "./components/product/ProductPage";
import Test from "./Test";
import {Login} from "./components/login/Login";
import {Edit} from "./components/edit/Edit";

export default function App() {
    const {pathname} = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const [tokenData, showTokenData] = useState('')
    const handleShowToken = (data) => {
        showTokenData(data)
    }
    console.log('APP tokenData',tokenData)


    return (
        <Routes>
            <Route path="/" element={<WhatsNew dataFromAPP={tokenData}/>}/>
            <Route path="/p/:productId/:colorId" element={<ProductPage/>}/>
            <Route path="/p/:productId/" element={<ProductPage/>}/>
            <Route path="/login" element={<Login showToken={handleShowToken}/>}/>
            <Route path="/edit" element={<Edit/>}/>
        </Routes>
    );
}
