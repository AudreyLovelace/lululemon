import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import { cartAction } from "../../actions/cartAction";
import { TfiClose } from "react-icons/tfi";
import "./CartItemTablet.scss";
import { Edit } from "./Edit";
import RemovePopup from "./RemovePopup";
export default function CartItemTablet({
  e,
  index,
  dropdownIndex,
  setDropdownIndex,
}) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  // console.log(e);

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
          <h3>
            {e.name}{" "}
            <TfiClose
              onClick={() => {
                // dispatch(cartAction.removeFromCart(index));
                setOpen(true);
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
            <p>Quantity</p>
            <p>${(Number(e.price) * Number(e.quantity)).toFixed(2)}</p>
          </div>
        </div>
        <div className="bottom">
          <Edit
            one={e.one}
            cartInfo={e}
            index={index}
            update={cartAction.updateItem}
          />

          <div className="edit">
            <span
              onClick={() => {
                dispatch(cartAction.addToLater(e, index));
              }}
            >
              Save for Later
            </span>
          </div>
        </div>
      </div>
      <p style={{ width: "100%" }}>Free Shipping + Free Returns</p>
    </div>
  );
}
