import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import PlusMinus from "./components/filter/PlusMinus";
import Filter from "./components/filter/Filter";
import SortDesktop from "./components/sort/SortDesktop";
import FilterLable from "./components/filter/FilterLable";
import TabletFilter from "./components/filter/TabletFilter";
import TopNavigation from "./components/navigation component/TopNavigation";
import MainFooter from "./components/footer/MainFooter";
import "./WhatsNew.scss";
export default function WhatsNew(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)

  return (
    <div className="whats_new">
      <TopNavigation />
      <main>
        <div className="filter_desktop">
          <Filter />
        </div>
        <div className="main_right">
          <div className="main_right_top">
            <SortDesktop />
          </div>{" "}
          <div className="lable_desktop">
            <FilterLable />
          </div>
        </div>
      </main>
      <div className="filter_tablet">
        <TabletFilter />
      </div>

      <MainFooter />
    </div>
  );
}
