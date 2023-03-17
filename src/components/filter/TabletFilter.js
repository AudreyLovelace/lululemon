import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import Filter from "./Filter";
import "./TabletFilter.scss";
export default function TabletFilter(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        FILTER & SORT
      </div>
      {open && (
        <>
          <div
            className="pop-window"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Filter />
          </div>
          <div
            className="pop-window-back"
            onClick={() => {
              setOpen(false);
            }}
          ></div>
        </>
      )}
    </>
  );
}
