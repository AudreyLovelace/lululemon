import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import FilterRow from "./FilterRow";

export default function FilterChoices({ filter, expand, more, e, loadPage }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const total = filter[e];
  //   let result = total.slice(0, 5);
  // console.log(more);

  const [rowClass, setRowClass] = useState(null);
  useEffect(() => {
    if (more[e]) {
      setRowClass(null);
    } else {
      setRowClass("fold");
    }
  }, [expand[e]]);
  useEffect(() => {
    if (loadPage) {
      setRowClass("fold");
      return;
    }
    if (more[e]) {
      setRowClass("more");
    } else {
      setRowClass("less");
    }
  }, [more[e]]);
  return (
    <div className="filter_choice">
      {total.map((choice, i) => {
        if (!expand[e]) {
          return null;
        }

        return (
          <div
            key={i}
            className={i > 4 ? rowClass : ""}
            style={{
              animationDelay: more[e]
                ? `${20 * (i - 5)}ms`
                : `${20 * (total.length - i - 1)}ms`,
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
