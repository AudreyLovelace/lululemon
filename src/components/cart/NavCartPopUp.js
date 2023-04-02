import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import "./NavCartPopUp.scss";
import { TfiClose } from "react-icons/tfi";
import { cartAction } from "../../actions/cartAction";
export default function NavCartPopUp(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)

  const cart = useSelector((state) => state?.cartReducer);
  const total = cart?.reduce((t, b) => {
    return t + b.quantity;
  }, 0);
  const subTotal = cart?.reduce((total, p) => {
    return total + Number(p.price) * Number(p.quantity);
  }, 0);
  return (
    <>
      <div className="nav_cart_triangle"></div>
      <div className="nav_cart_pop">
        <div className="nav_cart_pop_front">
          <h2>Items In Your Bag</h2>
          <div className="items">
            {cart?.map((e, index) => {
              const sizeKey = Object.keys(e.size);
              const selectSize = "Select Size";
              const size = "Size";
              return (
                <div key={index} className="item">
                  <img src={e.picture[0]} alt={e.name} width="40" />
                  <div className="item_detail">
                    <h3>
                      {e.name}
                      <TfiClose
                        onClick={() => {
                          dispatch(cartAction.removeFromCart(index));
                        }}
                      />
                    </h3>
                    <p>{e.colorName}</p>
                    {sizeKey?.map((s, i) => {
                      if (e.size[s]) {
                        return (
                          <p key={i}>
                            {s === selectSize ? size : s} {e.size[s]}
                          </p>
                        );
                      }
                    })}
                    <div>
                      <p>Quantity {e.quantity}</p>{" "}
                      <p>${Number(e.price).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="subtotal">
            <div>
              <h3>Subtotal({total} items)</h3>
              <h3>${subTotal.toFixed(2)}</h3>
            </div>
            <div>
              <h3>Shipping</h3>
              <h3>FREE</h3>
            </div>
            <Link to="/cart">
              {" "}
              <button>VIEW BAG & CHECKOUT</button>
            </Link>
          </div>
        </div>{" "}
        <div className="nav_cart_pop_back"></div>
      </div>
    </>
  );
}
