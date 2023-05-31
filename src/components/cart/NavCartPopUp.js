import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import "./NavCartPopUp.scss";

import { cartAction } from "../../actions/cartAction";
import NavCartItem from "./NavCartItem";

export default function NavCartPopUp({ setCartHovered }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  useEffect(() => {
    return () => {
      setCartHovered(false);
    };
  }, []);
  const cart = useSelector((state) => state?.cartReducer);
  const subTotal = cart.length
    ? cart?.reduce((total, p) => {
        return total + Number(p.price) * Number(p.quantity);
      }, 0)
    : 0;
  const total = cart.length
    ? cart?.reduce((t, b) => {
        return t + b.quantity;
      }, 0)
    : 0;
  return (
    <div
      className="nav_cart_pop"
      onMouseLeave={() => {
        setCartHovered(false);
      }}
    >
      {" "}
      <div className="nav_cart_pop_front">
        <h2>Items In Your Bag</h2>
        <div className="items">
          {cart?.map((e, index) => {
            return <NavCartItem e={e} index={index} key={index} />;
          })}
        </div>
        <div className="subtotal">
          <div>
            <h3>
              Subtotal<span>({total} items)</span>
            </h3>
            <h3>${subTotal.toFixed(2)}</h3>
          </div>
          <div>
            <h3>Shipping</h3>
            <h3>FREE</h3>
          </div>
          <Link to="/cart">
            <button>VIEW BAG & CHECKOUT</button>
          </Link>
        </div>
      </div>{" "}
      <div className="nav_cart_pop_back"></div>
    </div>
  );
}
