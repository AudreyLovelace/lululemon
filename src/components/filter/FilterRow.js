import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { filterActions } from "../../actions/filterAction";
export default function FilterRow({ choice, e, i }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  return (
    <div
      // style={{ animationDelay: `${50 * i}ms` }}
      className="filter_choice_row"
      key={i}
      onClick={() => {
        // console.log(e, i);

        dispatch(filterActions.checkbox(e, i));
      }}
    >
      <div className={choice.isChecked ? "checkbox" : ""}>
        <FaCheck />
      </div>
      <p>{choice.name}</p>
    </div>
  );
}
export const a = 0;
