import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SizeChoices.scss";
import { filterActions } from "../../actions/filterAction";
import {
  NavLink,
  useNavigate,
  useParams,
  Navigate,
  json,
} from "react-router-dom";

export default function SizeChoices({ type, expand }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const size = useSelector((state) => {
    return state?.filterReducer[type];
  });

  let result = [];
  let element = [];
  const divider = "sizeDivider";
  size.forEach((e, i) => {
    if (e.name !== divider) {
      element.push({ ...e, i: i });
      if (i === size.length - 1) {
        result.push(element);
      }
    } else {
      //   console.log(e);
      result.push(element);
      element = [];
    }
  });
  if (!expand) {
    return null;
  }
  return (
    <div>
      {result.map((e, index) => {
        return (
          <div className="size" key={index}>
            {e.map((ele, index) => {
              return (
                <button
                  key={index}
                  className={size[ele.i].isChecked ? "chosen" : ""}
                  onClick={() => dispatch(filterActions.checkbox(type, ele.i))}
                >
                  {ele.name}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
