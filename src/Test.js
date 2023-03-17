import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import PlusMinus from "./components/filter/PlusMinus";
import Filter from "./components/filter/Filter";
import SortDesktop from "./components/sort/SortDesktop";
import FilterLable from "./components/filter/FilterLable";
import TabletFilter from "./components/filter/TabletFilter";

export default function Test(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const currentIndex = useSelector((state) => {
    return state?.lululemonReducer?.currentIndex;
  });
  const id = useSelector((state) => state.cartReducer.a);
  return (
    <h1>
      <div className="lable_desktop">
        <FilterLable />
      </div>
      <SortDesktop />
      <div className="filter_tablet">
        <TabletFilter />
      </div>
      <div className="filter_desktop">
        <Filter />
      </div>
    </h1>
  );
}
