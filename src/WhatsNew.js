import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./components/filter/Filter";
import SortDesktop from "./components/sort/SortDesktop";
import FilterLable from "./components/filter/FilterLable";
import TabletFilter from "./components/filter/TabletFilter";
import TopNavigation from "./components/navigation component/TopNavigation";
import MainFooter from "./components/footer/MainFooter";
import "./WhatsNew.scss";
import OneProduct from "./components/productPreview/OneProduct";
import MoreProduct from "./components/filter/MoreProduct";
import Feedback from "./components/feedback/Feedback";
import FeedbackBtn from "./components/feedback/FeedbackBtn";

export default function WhatsNew(props) {
  const { dataFromApp } = props;

  const products = useSelector((state) => {
    return state?.lululemonReducer;
  });
  const [open, setOpen] = useState(false);

  return (
    <div className="whats_new">
      <TopNavigation dataFromWhatNew={dataFromApp} />
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
              <TabletFilter setOpen={setOpen} open={open} />
            </div>
            <div className="products">
              {products?.map((e, index) => {
                return <OneProduct one={e} key={index} />;
              })}
            </div>
          </div>
        </main>
        <MoreProduct />
      </div>
      <div className="container">
        <MainFooter />
      </div>
    </div>
  );
}
