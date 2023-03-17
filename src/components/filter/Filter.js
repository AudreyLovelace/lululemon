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
import SortTablet from "../sort/SortTablet";
import FilterLable from "./FilterLable";
import { TfiClose } from "react-icons/tfi";

export default function Filter({ setOpen }) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  useEffect(() => {
    setLoadPage(true);
    // console.log(loadPage);
    // filterActions.initPage(dispatch);
    if (localStorage.getItem("filter") !== null) {
      // console.log(localStorage.getItem("filter").Category);

      return;
    } else {
      filterActions.initPage(dispatch);
    }
  }, []);
  const filter = useSelector((state) => state?.filterReducer);
  // console.log(filter);
  const expands = {};
  const mores = {};

  const [loadPage, setLoadPage] = useState(true);

  useEffect(() => {
    if (!loadPage) {
      return;
    }
    setLoadPage(false);
    // console.log(loadPage);
  }, [expands, mores]);

  // const title = "women's what's new";

  const specialTypes = ["Size", "Colour"];
  const filterKeys = Object.keys(filter);

  const titleKey = ["Gender", "Men", "Women"];
  const titles = ["Men's What's New", "Women's What's New", "What's New"];
  const title = () => {
    const gender = filter[titleKey[0]];
    const men = gender?.filter((e) => e.name === titleKey[1]);
    const women = gender?.filter((e) => e.name === titleKey[2]);
    if (men[0].isChecked) {
      return titles[0];
    }
    if (women[0].isChecked) {
      return titles[1];
    }
    return titles[2];
  };

  //fetch product data when filter and sortId changed
  // const sortId = useSelector((state) => {
  //   return state?.sortReducer.id;
  // });

  // useEffect(() => {
  //   filterActions.filterProduct(dispatch, sortId, filter);
  // }, [filter, sortId]);

  filterKeys?.forEach((element) => {
    expands[element] = true;
    mores[element] = false;
  });

  const [expand, setExpand] = useState(expands);
  const [more, setMore] = useState(mores);

  const sort = useSelector((state) => state.sortReducer);
  return (
    <div className="filters">
      <h1>
        {title()}
        <span
          onClick={() => {
            setOpen(false);
          }}
        >
          <TfiClose />
        </span>
      </h1>
      {sort && (
        <div className="filter lable_tablet">
          <FilterLable />
        </div>
      )}
      <SortTablet />
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
}
