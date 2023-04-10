import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../actions/cartAction";

import "./CartItemDesktop.scss";
import { Edit } from "./Edit";
import RemovePopup from "./RemovePopup";
export default function CartItemDesktop({
  e,
  index,
  dropdownIndex,
  setDropdownIndex,
}) {
  const dispatch = useDispatch();

  const sizeKey = Object.keys(e.size);
  const selectSize = "Select Size";
  const size = "Size";
  const arrow = (
    <svg
      height="8"
      width="14"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 14 8"
      xmlns="http://www.w3.org/2000/svg"
      className={index == dropdownIndex ? "arrow" : ""}
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <path
        d="m13 .99-6.47 6.5a.74.74 0 0 1-1.06 0L-1 .99l.35-.35a1 1 0 0 1 1.41 0L6 5.86 11.24.6a1 1 0 0 1 1.41 0z"
        fillRule="evenodd"
        stroke="none"
      ></path>
    </svg>
  );
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [open, setOpen] = useState(false);
  return (
    <div key={index} className="item">
      {open && (
        <RemovePopup
          setOpen={setOpen}
          remove={cartAction.removeFromCart}
          index={index}
          open={open}
        />
      )}
      <Link to={`/p/${e.productId}/${e.colorId}`}>
        <img src={e.picture[0]} alt={e.name} />
      </Link>
      <div className="item_detail">
        <div className="top">
          <h3>{e.name}</h3>
          <p>{e.colorName}</p>
          <div>
            <div>
              {sizeKey?.map((s, i) => {
                if (e.size[s]) {
                  return (
                    <p key={i}>
                      {s === selectSize ? size : s} {e.size[s]}
                    </p>
                  );
                }
              })}

              <Edit
                one={e.one}
                cartInfo={e}
                index={index}
                update={cartAction.updateItem}
              />
            </div>
            <div>
              <p>Item Price</p>
              <p>{Number(e.price).toFixed(2)}</p>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Quantity </p>
              <div
                className="quantity_dropdown"
                onClick={(event) => {
                  event.stopPropagation();
                  setDropdownIndex((prev) => {
                    if (prev === index) {
                      return -1;
                    } else {
                      return index;
                    }
                  });
                }}
              >
                <div
                  className="quantity_dropdown_arrow"
                  style={
                    index === dropdownIndex
                      ? { boxShadow: " 0 0 15px rgba(0, 0, 0, 0.4)" }
                      : {}
                  }
                >
                  <p>{e.quantity}</p>
                  {arrow}
                </div>{" "}
                {index === dropdownIndex && (
                  <div className="quantity_dropdown_option">
                    {options.map((ele, i) => {
                      return (
                        <p
                          key={i}
                          onClick={() => {
                            dispatch(cartAction.changeQuantity(index, ele));
                          }}
                        >
                          {ele}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div>
              <p>Total Price</p>
              <p>${(Number(e.price) * Number(e.quantity)).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>Free Shipping + Free Returns</p>

          <div>
            <p
              onClick={() => {
                dispatch(cartAction.addToLater(e, index));
              }}
            >
              Save for Later
            </p>

            <p
              onClick={() => {
                setOpen(true);
              }}
            >
              Remove
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
