import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { cartAction } from "../../actions/cartAction";
import { TfiClose } from "react-icons/tfi";
import "./CartItemDesktop.scss";
export default function CartItemDesktop({ e, index }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)

  const sizeKey = Object.keys(e.size);
  const selectSize = "Select Size";
  const size = "Size";
  return (
    <div key={index} className="item">
      <img src={e.picture[0]} alt={e.name} />
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
          <p>${(Number(e.price) * Number(e.quantity)).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
