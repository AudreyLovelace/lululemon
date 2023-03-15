import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import FilterRow from "./FilterRow";

export default function FilterChoices({ filter, expand, more, e }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const total = filter[e];
  //   let result = total.slice(0, 5);

  return (
    <div className="filter_choice">
      {total.map((choice, i) => {
        if (!expand[e]) {
          return null;
        }
        if (!more[e] && i >= 5) {
          return null;
        }

        return <FilterRow e={e} i={i} choice={choice} key={i} />;
      })}
    </div>
  );
}
