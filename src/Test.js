import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";

export default function Test(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const currentIndex = useSelector((state) => {
    return state?.lululemonReducer?.currentIndex;
  });
  return <h1>1</h1>;
}
