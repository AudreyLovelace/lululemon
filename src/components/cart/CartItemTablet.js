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
  //   dropdownIndex,
  //   setDropdownIndex,
}) {
  //   console.log(dropdownIndex);
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  // console.log(e);

  const sizeKey = Object.keys(e.size);
  const selectSize = "Select Size";
  const size = "Size";

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
            <p>
              Quantity
              <select
                defaultValue={e.quantity}
                onChange={(e) => {
                  dispatch(cartAction.changeQuantity(index, e.target.value));
                }}
              >
                {options.map((o, i) => {
                  return (
                    <option key={i} value={o}>
                      {o}
                    </option>
                  );
                })}
              </select>
            </p>
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
              onClick={(event) => {
                event.stopPropagation();
                dispatch(cartAction.addToLater(e, index));
              }}
            >
              Save for Later
            </span>
          </div>
        </div>
      </div>
      <p style={{ gridColumn: "span 2", marginTop: 20 }}>
        Free Shipping + Free Returns
      </p>
    </div>
  );
}
