import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import PlusMinus from "./components/filter/PlusMinus";
import Filter from "./components/filter/Filter";
import Sort from "./components/sort/Sort";

export default function Test(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const currentIndex = useSelector((state) => {
    return state?.lululemonReducer?.currentIndex;
  });
  const id = useSelector((state) => state.cartReducer.a);
  return (
    <h1>
      <Sort />
      <Filter />
    </h1>
  );
}
