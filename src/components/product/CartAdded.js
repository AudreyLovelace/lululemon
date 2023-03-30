import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./CartAdded.scss";
import { cartAction } from "../../actions/cartAction";
export default function CartAdded({ cartInfo, setCartAdded }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const cart = useSelector((state) => state?.cartReducer);
  const subTotal = cart?.whole.reduce((total, p) => {
    return total + Number(p.price) * Number(p.quantity);
  }, 0);

  return (
    <div className="cart_added">
      <div className="cart_added_front">{subTotal}</div>
      <div
        className="cart_added_back"
        onClick={() => {
          setCartAdded(false);
        }}
      ></div>
    </div>
  );
}
