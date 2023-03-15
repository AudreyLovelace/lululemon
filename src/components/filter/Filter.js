import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { filterActions } from "../../actions/filterAction";
import "./Filter.scss";
import PlusMinus from "./PlusMinus";
import MoreOrLess from "./MoreOrLess";
import FilterRow from "./FilterRow";
import FilterChoices from "./FilterChoices";
export default function Filter(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const filter = useSelector((state) => state?.filterReducer);
  // const title = "women's what's new";
  const filterKeys = Object.keys(filter);
  const expands = {};
  const mores = {};
  filterKeys.forEach((element) => {
    expands[element] = true;
    mores[element] = false;
  });
  const [expand, setExpand] = useState(expands);
  const [more, setMore] = useState(mores);
  return (
    <div className="filters">
      {filterKeys.map((e, index) => {
        return (
          <div className="filter" key={index}>
            <div
              className="filter_expand"
              onClick={() => {
                setExpand((prev) => {
                  // console.log(prev[e]);

                  if (prev[e]) {
                    prev[e] = false;
                  } else {
                    prev[e] = true;
                  }
                  const a = { ...prev };
                  return a;
                });
              }}
            >
              <h4>{e}</h4>
              <PlusMinus expand={expand[e]} />
            </div>
            {/* <div className="filter_choice">
              {filter[e].map((choice, i) => {
                if (!expand[e]) {
                  return null;
                }
                if (!more[e] && i >= 5) {
                  return null;
                }

                return <FilterRow e={e} i={i} choice={choice} />;
              })}
            </div> */}
            <FilterChoices filter={filter} e={e} expand={expand} more={more} />
            {expand[e] ? (
              <div
                className="filter_more"
                onClick={() => {
                  setMore((prev) => {
                    // console.log(prev[e]);

                    if (prev[e]) {
                      prev[e] = false;
                    } else {
                      prev[e] = true;
                    }
                    const a = { ...prev };
                    return a;
                  });
                }}
              >
                {filter[e].length > 5 ? <MoreOrLess more={more[e]} /> : <></>}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
