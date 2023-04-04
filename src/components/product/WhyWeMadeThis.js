import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./WhyWeMadeThis.scss";
export default function WhyWeMadeThis({ why, pictures }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  if (!why) {
    return null;
  }

  return (
    <div className="why_we">
      <div className="container">
        <div className="why_we_desktop">
          <div>
            <h1>Why we made this</h1>
            <div></div>
            <h2>{why}</h2>
          </div>
          <img src={pictures[0]} alt={why} />{" "}
          <img src={pictures[1]} alt={why} />
        </div>
      </div>
      <div className="why_we_mobile">
        <div className="container">
          <h1>Why we made this</h1>
          <div></div>
          <h2>{why}</h2>
        </div>
        <img src={pictures[0]} alt={why} />{" "}
      </div>
    </div>
  );
}
