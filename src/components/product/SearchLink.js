import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { filterActions } from "../../actions/filterAction";

export default function SearchLink(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get all products
  let loading = true;
  useEffect(() => {
    return () => {
      loading = false;
    };
  }, []);
  const keyWord = ["Online", "Shirt", "Long"];

  return (
    <div className="search_link">
      {keyWord.map((e, index) => {
        return (
          <p key={index}>
            <span
              onClick={() => {
                // console.log(e);

                if (loading) {
                  dispatch(filterActions.searchLink(e));

                  filterActions.initPage(dispatch);
                  // setTimeout(() => {
                  navigate("/");
                  // }, 2000);
                }
              }}
            >
              {e}
            </span>
            {index === keyWord.length - 1 ? null : "/"}
          </p>
        );
      })}
    </div>
  );
}
