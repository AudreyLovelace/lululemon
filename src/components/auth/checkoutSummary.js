import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";

export default function CheckoutSummary({ cart }) {
  //const dispatch=useDispatch()
  //const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
  console.log(cart);

  return (
    <div className="checkout_summary">
      {cart.map((e, index) => {
        const keys = Object.keys(e.size);
        const selectSize = "Select Size";
        return (
          <section key={index}>
            <div className="left">
              <img src={e.picture[0].trim()} alt={e.name} />
            </div>
            <div className="right">
              <h4>{e.name}</h4>
              <p>{e.colorName}</p>
              {!!keys.length &&
                keys.map((key, i) => {
                  return (
                    <p key={i}>
                      {key === selectSize ? "Size" : key} {e.size[key]}
                    </p>
                  );
                })}
              <div>
                <p>Quantity {e.quantity}</p>
                <p>${Number(e.price).toFixed(2)}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
