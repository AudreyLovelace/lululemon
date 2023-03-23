import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { BsChevronLeft, BsZoomOut } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import "./ProductPopUp.scss";
export default function ProductPopUp({ media, name, setOpen }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)

  return (
    <div className="product_pop_up">
      <div className="product_pop_up_top">
        <div
          onClick={() => {
            setOpen(false);
          }}
        >
          <BsChevronLeft /> <p>Back to Product</p>
        </div>
        <h1>{name}</h1>
        <div
          onClick={() => {
            setOpen(false);
          }}
        >
          <TfiClose />
        </div>
      </div>

      <div className="product_pop_up_bottom">
        {media.map((e, index) => {
          return (
            <img
              key={index}
              src={e}
              alt=""
              onClick={() => {
                setOpen(false);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
