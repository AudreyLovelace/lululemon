import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./CartAdded.scss";
import { cartAction } from "../../actions/cartAction";
import { TfiClose } from "react-icons/tfi";
export default function CartAdded({ cartInfo, setCartAdded, cartAdded }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const navigate = useNavigate();
  const cart = useSelector((state) => state?.cartReducer);
  const subTotal = cart?.reduce((total, p) => {
    return total + Number(p.price) * Number(p.quantity);
  }, 0);
  const total = cart?.reduce((t, b) => {
    return t + b.quantity;
  }, 0);
  const bag = (
    <svg
      height="32"
      width="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="bag-icon"
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 0 0-.75.75v12A4.75 4.75 0 0 0 8 23.75h8A4.75 4.75 0 0 0 20.75 19V7a.76.76 0 0 0-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0 1 16 22.25H8A3.26 3.26 0 0 1 4.75 19V7.75H7l-.24 2.16.49.06a1 1 0 0 0 1.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 0 0 1.12.87l.49-.06L17 7.75h2.28L19.25 19z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
  const right = (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="ctaLinkIcon-3XB0n"
      focusable="false"
      role="img"
      aria-hidden="true"
      data-testid="link-arrow-icon"
    >
      <path
        d="m10.53 2.47 5 5a.75.75 0 0 1 .01 1.04l-5 5-.35-.35a1 1 0 0 1 0-1.42l3-3H5a1 1 0 0 1-1-1v-.5h9.18l-3-3a1 1 0 0 1 0-1.42l.35-.35ZM2 7.25a1 1 0 0 1 1 1v.5H1a1 1 0 0 1-1-1v-.5Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
  console.log(cartInfo);
  const sizeKey = Object.keys(cartInfo.size);
  const selectSize = "Select Size";
  const size = "Size";
  return (
    <div className="cart_added">
      <div className="cart_added_front">
        <div className="cart_added_front_top">
          <div className="cart_added_front_top_left">
            <h1>Nice Pick!</h1>
            <div>
              {bag} <p>{total} Item</p>
            </div>
          </div>
          <TfiClose
            onClick={() => {
              setCartAdded(false);
            }}
          />
        </div>
        <div className="cart_added_front_bottom">
          <div className="cart_added_front_bottom_left">
            <img src={cartInfo.picture[0]} alt="" style={{ width: 20 }} />
            <div>
              <h2>{cartInfo.name}</h2>
              {sizeKey.map((e, index) => {
                if (!cartInfo.size[e]) {
                  return null;
                } else {
                  return (
                    <p>
                      {e === selectSize ? size : e}: {cartInfo.size[e]}
                    </p>
                  );
                }
              })}
              <p>${Number(cartInfo.price).toFixed(2)} CAD</p>
            </div>
          </div>
          <div className="cart_added_front_bottom_right">
            <div>
              <p>Subtotal</p>
              <p>${subTotal.toFixed(2)} CAD</p>
              <button
                onClick={() => {
                  navigate("/cart");
                }}
              >
                VIEW BAG & CHECKOUT
              </button>
              <p
                onClick={() => {
                  setCartAdded(false);
                }}
              >
                CONTINUE SHOPPING {right}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cart_added_back"
        onClick={() => {
          setCartAdded(false);
        }}
      ></div>
    </div>
  );
}
