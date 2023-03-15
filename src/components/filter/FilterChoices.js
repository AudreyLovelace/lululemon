import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import FilterRow from "./FilterRow";

export default function FilterChoices({ filter, expand, more, e }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const total = filter[e];
  //   let result = total.slice(0, 5);
  console.log(more);
  function className(more, i, expand) {
    if (i < 5) {
      return null;
    } else {
      if (more) {
        return "more";
      } else {
        return "less";
      }
    }
  }
  return (
    <div className="filter_choice">
      {total.map((choice, i) => {
        if (!expand[e]) {
          return null;
        }

        return (
          <div
            key={i}
            // className={className(more[e], i, expand[e])}
            style={{
              animationDelay: more[e]
                ? `${50 * (i - 5)}ms`
                : `${50 * (total.length - i - 5)}ms`,
            }}
          >
            <FilterRow e={e} i={i} choice={choice} key={i} />
          </div>
        );

        // return <FilterRow e={e} i={i} choice={choice} key={i} />;
      })}
    </div>
  );
}
