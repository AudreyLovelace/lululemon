import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { filterActions } from "../../actions/filterAction";
import "./SortDesktop.scss";
export default function SortDesktop(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const [open, setOpen] = useState(false);
  const sort = useSelector((state) => {
    return state?.sortReducer;
  });
  const sortId = sort.id;
  const sortOption = sort.options[sortId];
  const sortKeys = Object.keys(sort.options);
  // console.log(sortId);
  // console.log(sortKeys);
  return (
    <div className="sort-desktop">
      <div className="sort-desktop-head">
        <p className="sort-desktop-head-title"> Sort by </p>
        <span
          onClick={() => {
            setOpen(true);
          }}
        >
          <p> {sortOption} </p>
          <BsChevronDown />
        </span>
      </div>
      {open && (
        <div className="sort-desktop-body">
          <div className="sort-desktop-body-option">
            {sortKeys.map((e, index) => {
              return (
                <p
                  key={index}
                  onClick={(event) => {
                    // console.log(filterActions.sort(e));
                    // event.stopPropagation();
                    dispatch(filterActions.sort(e));
                    setOpen(false);
                  }}
                >
                  {sort.options[e]}
                </p>
              );
            })}
          </div>
          <div
            className="pop-window-back"
            onClick={() => {
              setOpen(false);
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
