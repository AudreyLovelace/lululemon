import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./ImpulseShadow.scss";
export default function ImpulseShadow({ total }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    let timerId;
    if (total) {
      timerId = setTimeout(() => {
        setShowShadow(true);
      }, 5000);
    } else {
      setShowShadow(false);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [total]);
  return showShadow && <div className="impulse_shadow"></div>;
}
