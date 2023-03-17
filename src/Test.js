import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {NavLink, useNavigate, useParams, Navigate} from "react-router-dom";
import PlusMinus from "./components/PlusMinus";
import TopNavigation from "./components/navigation component/TopNavigation";
import {findAllByDisplayValue} from "@testing-library/react";
import MainFooter from "./components/footer/MainFooter";

export default function Test(props) {
    //const dispatch=useDispatch()
    //const ??? = useSelector(state => state?.reducer?.???)
    const currentIndex = useSelector((state) => {
        return state?.lululemonReducer?.currentIndex;
    });
    const id = useSelector((state) => state.cartReducer.a);
    return (<>


        <TopNavigation/>
        <MainFooter/>
    </>)
}
