import React, { useState, useEffect, useRef, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { filterActions } from "../../actions/filterAction";
import "./MoreProduct.scss";
export default function MoreProduct(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const sordId = useSelector((state) => state?.sortReducer.id);
  const filter = useSelector((state) => state?.filterReducer);
  const pages = useSelector((state) => state?.pageReducer);
  const products = useSelector((state) => {
    return state?.lululemonReducer;
  });
  const observer = useRef();
  const moreProduct = useCallback((node) => {
    observer.current = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          setTimeout(() => {
            filterActions.filterProduct(
              dispatch,
              sordId,
              filter,
              pages.curPage + 1
            );
          }, 100);
        }
      },
      { rootMargin: "50px" }
    );
    if (node) {
      observer.current.observe(node);
    }
  });

  const minus = (
    <svg
      height="19"
      width="19"
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M 21.39 8.925 a 1 0.7 0 0 0 1 -0.7 v -0.35 h -19 a 1 0.7 0 0 0 -1 0.7 v 0.35 Z"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      ></path>
    </svg>
  );
  if (pages.totalPage > pages.curPage) {
    return (
      <div
        ref={moreProduct}
        // className="more_product"
        // onClick={() => {
        //   filterActions.filterProduct(
        //     dispatch,
        //     sordId,
        //     filter,
        //     pages.curPage + 1
        //   );
        // }}
      >
        <p>
          viewing {products.length} of {pages.totalProducts} more
        </p>
        <h4>
          {" "}
          <div className="plus-minus">
            <div className="fixed">{minus}</div>
            <div className={"move"}>{minus}</div>
          </div>
          VIEW MORE PRODUCTS
        </h4>
      </div>
    );
  } else {
    return null;
  }
}
