import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import CartItemDesktop from "./CartItemDesktop";

export default function Cart(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const cart = useSelector((state) => {
    return state?.cartReducer;
  });
  const [dropdownIndex, setDropdownIndex] = useState(-1);
  return (
    <>
      <div className="cart_item_desktop">
        {cart.map((e, index) => {
          return (
            <CartItemDesktop
              e={e}
              index={index}
              key={index}
              dropdownIndex={dropdownIndex}
              setDropdownIndex={setDropdownIndex}
            />
          );
        })}
      </div>{" "}
    </>
  );
}
