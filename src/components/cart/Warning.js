import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";

export default function Warning(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const bag = (
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
      <path
        d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 0 0-.75.75v12A4.75 4.75 0 0 0 8 23.75h8A4.75 4.75 0 0 0 20.75 19V7a.76.76 0 0 0-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0 1 16 22.25H8A3.26 3.26 0 0 1 4.75 19V7.75H7l-.24 2.16.49.06a1 1 0 0 0 1.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 0 0 1.12.87l.49-.06L17 7.75h2.28L19.25 19z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
  return (
    <div className="warning">
      {bag} <p>Items in bag are not reserved. Checkout now to get your gear.</p>
    </div>
  );
}
