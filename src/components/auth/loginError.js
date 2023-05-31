import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./loginError.scss";
export default function LoginError(props) {
  //const dispatch=useDispatch()
  //const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
  const warning = (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="iconBlock-1wZMf"
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M13.17 17.15a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0zM10.893 6.138c.347-.086 1.51-.204 1.79-.033a.984.984 0 0 1 .457.776l.09 7.95c-.347.086-1.64.207-1.92.036a.984.984 0 0 1-.457-.776z"
          fill="currentColor"
        ></path>
        <circle
          cx="12"
          cy="12"
          r="11"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
      </g>
    </svg>
  );
  return (
    <div className="login_error">
      {warning}
      <p>Something's not right with your email address or password</p>
    </div>
  );
}
