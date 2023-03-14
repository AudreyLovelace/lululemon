import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./plusMinus.scss";
export default function PlusMinus(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const [expend, setExpend] = useState(true);
  const minus = (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M21.39 12.75a1 1 0 0 0 1-1v-.5h-19a1 1 0 0 0-1 1v.5Z"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      ></path>
    </svg>
  );
  return (
    <>
      <div
        className="plus-minus"
        onClick={() => {
          if (expend) {
            setExpend(false);
          } else {
            setExpend(true);
          }
        }}
      >
        <div>{minus}</div>
        <div className={expend ? "move" : ""}>{minus}</div>
      </div>
    </>
  );
}
