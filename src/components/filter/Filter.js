import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { filterActions } from "../../actions/filterAction";
import "./Filter.scss";
import PlusMinus from "./PlusMinus";
import MoreOrLess from "./MoreOrLess";
import FilterChoices from "./FilterChoices";
import SizeChoices from "./SizeChoices";
import ColorChoices from "./ColorChoices";

export default function Filter(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const filter = useSelector((state) => state?.filterReducer);
  // const title = "women's what's new";
  const specialTypes = ["Size", "Colour"];
  const filterKeys = Object.keys(filter);
  const expands = {};
  const mores = {};
  const [loadPage, setLoadPage] = useState(true);
  useEffect(() => {
    setLoadPage(true);
    console.log(loadPage);

    if (localStorage.getItem("filter") !== null) {
      return;
    } else {
      filterActions.initPage(dispatch);
    }
  }, []);

  useEffect(() => {
    setLoadPage(false);
    console.log(loadPage);
  }, [expands, mores]);

  filterKeys.forEach((element) => {
    expands[element] = true;
    mores[element] = false;
  });
  const [expand, setExpand] = useState(expands);
  const [more, setMore] = useState(mores);
  if (filter) {
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

              {!specialTypes.includes(e) && (
                <FilterChoices
                  loadPage={loadPage}
                  filter={filter}
                  e={e}
                  expand={expand}
                  more={more}
                />
              )}
              {e === specialTypes[0] && (
                <SizeChoices type={e} expand={expand[e]} />
              )}
              {e === specialTypes[1] && (
                <ColorChoices type={e} expand={expand[e]} />
              )}
              {expand[e] && !specialTypes.includes(e) ? (
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
  } else {
    return null;
  }
}
