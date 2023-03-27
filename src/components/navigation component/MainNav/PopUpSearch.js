import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { filterActions } from "../../../actions/filterAction";
import "./PopUpSearch.scss";
import { useLocation } from "react-router-dom";

export default function PopUpSearch({ setOpen, dispatch }) {
  //   const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const recent = useSelector((state) => state?.searchReducer?.recent);
  const trending = useSelector((state) => state?.searchReducer?.trending);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  function hasRecent(recent) {
    if (recent.length) {
      return true;
    } else {
      return false;
    }
  }
  const titles = ["TRENDING SEARCHES", "RECENT SEARCHES", "Clear all"];
  return (
    <>
      <div
        className="pop_up_search"
        onClick={() => {
          setOpen(false);
        }}
      >
        <div>
          {hasRecent(recent) && (
            <ul>
              <li>
                <h2>{titles[1]}</h2>
                <h3
                  onClick={(e) => {
                    e.stopPropagation();

                    dispatch(filterActions.clearSearchHistory());
                  }}
                >
                  {titles[2]}
                </h3>
              </li>
              {recent?.map((e, index) => {
                return (
                  <li key={index}>
                    <div
                      className="p"
                      onClick={() => {
                        // setMessage(e);
                        dispatch(filterActions.searchLink(e));
                        filterActions.initPage(dispatch);
                        setTimeout(() => {
                          if (pathname !== "/") {
                            navigate("/");
                          }
                        }, 2000);
                      }}
                    >
                      {e}
                      <div></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          {!hasRecent(recent) && (
            <ul>
              <li>
                <h2>{titles[0]}</h2>
              </li>
              {trending?.map((e, index) => {
                return (
                  <li key={index}>
                    <div
                      className="p"
                      onClick={() => {
                        // setMessage(e);
                        dispatch(filterActions.searchLink(e));
                        filterActions.initPage(dispatch);
                        setTimeout(() => {
                          if (pathname !== "/") {
                            navigate("/");
                          }
                        }, 2000);
                      }}
                    >
                      {e}
                      <div></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>{" "}
      <div
        className="pop_up_search_back"
        onClick={() => {
          setOpen(false);
        }}
      ></div>
    </>
  );
}
