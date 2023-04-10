import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import {useEffect, useState} from "react";
import "./app.scss";

import WhatsNew from "./WhatsNew";
import ProductPage from "./components/product/ProductPage";
import Cart from "./components/cart/Cart";
import {Login} from "./components/login/Login";
import {QRCode} from "./components/QRcode/QRcode";

export default function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [tokenData, setTokenData] = useState(null)
    const handleShowToken = (data) => {
        setTokenData(data)
    }


    return (
        <Routes>
            <Route path="/" element={<WhatsNew dataFromApp={tokenData}/>}/>
            <Route path="/p/:productId/:colorId" element={<ProductPage/>}/>
            <Route path="/p/:productId/" element={<ProductPage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login showToken={handleShowToken}/>}/>

        </Routes>
    );
}
