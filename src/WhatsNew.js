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
import { filterActions } from "./actions/filterAction";
export default function WhatsNew(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state?.lululemonReducer;
  });
  const sordId = useSelector((state) => state?.sortReducer.id);
  const filter = useSelector((state) => state?.filterReducer);
  const pages = useSelector((state) => state?.pageReducer);
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
          {pages.totalPage > pages.curPage && (
            <div
              onClick={() => {
                filterActions.filterProduct(
                  dispatch,
                  sordId,
                  filter,
                  pages.curPage + 1
                );
              }}
            >
              <p>
                {" "}
                viewing {products.length} of {pages.totalProducts} more
              </p>
              <h4>+ VIEW MORE PRODUCTS</h4>
            </div>
          )}
        </main>
      </div>

      <div className="container">
        <MainFooter />
      </div>
    </div>
  );
}
