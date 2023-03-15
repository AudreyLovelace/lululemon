import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import PlusMinus from "./PlusMinus";

export default function MoreOrLess({ more }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const view = ["View Less", "View More"];
  return (
    <div className="more_or_less">
      <p>{more ? view[0] : view[1]}</p>
      <PlusMinus expand={more} />
    </div>
  );
}
