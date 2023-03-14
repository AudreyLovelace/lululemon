import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import { helpers } from "../../actions/action";
export default function Filter(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const type = ["checkbox", "size", "color"];
  const filter = [
    { type: type[0], name: "category", choices: [1, 2, 3, 4, 5, 6, 7, 8] },
  ];
  const title = "women's what's new";
  return (
    <>
      <h3>{helpers.firstLetter(title)}</h3>
      {filter.map((e, index) => {
        if (e.type === type[0]) {
          return (
            <div key={index}>
              <Checkbox />
            </div>
          );
        }
      })}
    </>
  );
}
