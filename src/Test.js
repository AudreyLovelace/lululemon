import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
// import PlusMinus from "./components/PlusMinus";
import Feedback from "./components/Feedback";
import FeedbackBtn from "./components/FeedbackBtn";

export default function Test(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  // const currentIndex = useSelector((state) => {
  //   return state?.lululemonReducer?.currentIndex;
  // });
  const id = useSelector((state) => state.cartReducer.a);
  return (
    <h1>
      {/*{currentIndex}*/}
      {/*<span>{id}</span>*/}
        <Feedback/>
        <FeedbackBtn/>
      {/*<PlusMinus />*/}
    </h1>
  );
}
