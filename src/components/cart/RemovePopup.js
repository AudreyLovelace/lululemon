import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import "./RemovePopup.scss";
export default function RemovePopup({ setOpen, remove, index, open }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  //   useEffect(() => {
  //     if (open) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "visible";
  //     }
  //     return () => {
  //       document.body.style.overflow = "visible";
  //     };
  //   }, [open]);
  return (
    <div className="remove_popup">
      <div className="remove_popup_front">
        <TfiClose
          onClick={() => {
            setOpen(false);
          }}
        />
        <h1>Are you sure you want to remove this item from your bag?</h1>
        <button
          onClick={() => {
            dispatch(remove(index));
            setOpen(false);
          }}
        >
          YES, REMOVE THIS ITEM
        </button>
        <p
          onClick={() => {
            setOpen(false);
          }}
        >
          No, keep this item
        </p>
      </div>
      <div
        className="remove_popup_back"
        onClick={() => {
          setOpen(false);
        }}
      ></div>
    </div>
  );
}
