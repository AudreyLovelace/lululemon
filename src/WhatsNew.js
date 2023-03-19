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
import OneProduct from "./components/productPreview/OneProduct";
export default function WhatsNew(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const products = useSelector((state) => {
    return state?.lululemonReducer;
  });
  // let uniqueProducts = [];
  // if (products) {
  //   // console.log(products, "products");
  //   uniqueProducts = products.filter((item, index) => {
  //     const id = item.productId;
  //     const i = products.findIndex((e) => {
  //       // console.log(e, "a");

  //       return e.productId === id;
  //     });
  //     // console.log(index, i);

  //     return index === i;
  //   });
  // }
  return (
    <div className="whats_new">
      <nav>
        <div className="container">
          <TopNavigation />
        </div>
      </nav>
      <div className="container">
        <main>
          <div className="filter_desktop">
            <Filter />
          </div>

          <div className="main_right">
            <div className="main_right_top">
              <SortDesktop />
            </div>
            <div className="lable_desktop">
              <FilterLable />
            </div>
            <div className="filter_tablet">
              <TabletFilter />
            </div>
            <div className="products">
              {products.map((e, index) => {
                return <OneProduct one={e} key={index} />;
              })}
            </div>
          </div>
          <div>viewing 60 of 159 more</div>
        </main>
      </div>

      <div className="container">
        <MainFooter />
      </div>
    </div>
  );
}
