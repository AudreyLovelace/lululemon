import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import Filter from "./Filter";
import "./TabletFilter.scss";
export default function TabletFilter(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const [open, setOpen] = useState(false);
  const lableNum = useSelector((state) => state?.lableReducer.length);
  return (
    <>
      <div
        className="filter_and_sort"
        onClick={() => {
          setOpen(true);
        }}
      >
        FILTER & SORT ({lableNum})
      </div>
      {open && (
        <>
          <div
            className="pop-window"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Filter setOpen={setOpen} />
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
