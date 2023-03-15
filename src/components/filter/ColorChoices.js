import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavLink,
  useNavigate,
  useParams,
  Navigate,
  json,
} from "react-router-dom";
import "./ColorChoices.scss";
import { filterActions } from "../../actions/filterAction";
export default function ColorChoices({ type, expand }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const color = useSelector((state) => {
    return state?.filterReducer[type];
  });

  if (!expand) {
    return null;
  }
  return (
    <div className="color-filter">
      {color.map((e, index) => {
        return (
          <div
            className="color-checkbox"
            key={index}
            onClick={() => {
              dispatch(filterActions.checkbox(type, index));
            }}
          >
            <div
              className={e.isChecked ? "color-checkbox-checked" : ""}
              style={{
                backgroundImage: `url(${e.swatch})`,
              }}
            ></div>
            <p>{e.alt}</p>
          </div>
        );
      })}
    </div>
  );
}
