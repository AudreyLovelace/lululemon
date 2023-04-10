import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import { cartAction } from "../../actions/cartAction";
import RemovePopup from "./RemovePopup";
import "./CartItemDesktop.scss";
import { Edit } from "./Edit";
export default function LaterItemDesktop({ e, index, dropdownIndex }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)

  const [open, setOpen] = useState(false);
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
  return (
    <div key={index} className="item">
      {open && (
        <RemovePopup
          setOpen={setOpen}
          remove={cartAction.removeFinalLater}
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
                update={cartAction.updateLaterItem}
              />
            </div>
            <div>
              <p>Item Price</p>
              <p>{Number(e.price).toFixed(2)}</p>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Quantity </p>
              <div className="quantity_dropdown">
                <div
                  className="quantity_dropdown_arrow"
                  style={{ backgroundColor: "grey" }}
                >
                  <p>{e.quantity}</p>
                  {/* {arrow} */}
                </div>{" "}
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
                dispatch(cartAction.removeFromLater(e, index));
              }}
            >
              Add to Bag
            </p>

            <p
              onClick={() => {
                // dispatch(cartAction.removeFinalLater(index));
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
