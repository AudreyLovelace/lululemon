import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import PlusMinus from "../filter/PlusMinus";
import { filterActions } from "../../actions/filterAction";
export default function SortTablet(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)

  const sort = useSelector((state) => {
    return state?.sortReducer;
  });
  const sortId = sort.id;
  const sortOption = sort.options[sortId];
  const sortKeys = Object.keys(sort.options);
  const [expand, setExpand] = useState(true);
  return (
    <div className="filter sort_tablet">
      <div
        className="filter_expand"
        onClick={() => {
          setExpand((prev) => {
            // console.log(prev[e]);
            if (prev) {
              prev = false;
            } else {
              prev = true;
            }
            return prev;
          });
        }}
      >
        <h4>Sort By: {sortOption}</h4>
        <PlusMinus expand={expand} />
      </div>
      {expand && (
        <div className="filter_choice">
          {sortKeys.map((e, index) => {
            return (
              <div
                className="filter_choice_row"
                key={index}
                onClick={() => {
                  dispatch(filterActions.sort(e));
                }}
              >
                <div
                  className={e === sortId ? "sort_radio_checked" : "sort_radio"}
                ></div>
                <p>{sort.options[e]}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
