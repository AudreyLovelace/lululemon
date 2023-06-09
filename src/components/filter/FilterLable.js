import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { filterActions } from "../../actions/filterAction";
import "./FilterLable.scss";
export default function FilterLable(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const lable = useSelector((state) => {
    return state?.lableReducer;
  });
  //   console.log(lable);

  const filter = useSelector((state) => state?.filterReducer);
  if (lable.length === 0) {
    return null;
  }
  return (
    <div className="lable">
      {lable.map((e, index) => {
        const ele = JSON.parse(e);
        // console.log(ele);

        const lableName =
          filter[ele[0]][ele[1]].name || filter[ele[0]][ele[1]].alt;
        return (
          <div
            key={index}
            className="filter_lable"
            onClick={() => dispatch(filterActions.checkbox(ele[0], ele[1]))}
          >
            <p> {lableName}</p>
            <TfiClose />
          </div>
        );
      })}
    </div>
  );
}
