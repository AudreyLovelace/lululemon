import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./plusMinus.scss";
export default function PlusMinus({ expand }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  // console.log(expand, 1);

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
  return (
    <>
      <div className="plus-minus">
        <div className="fixed">{minus}</div>
        <div className={expand ? "" : "move"}>{minus}</div>
      </div>
    </>
  );
}
