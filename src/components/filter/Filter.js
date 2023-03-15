import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { helpers } from "../../actions/filterAction";
import "./Filter.scss";
import PlusMinus from "./PlusMinus";
export default function Filter(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)

  const filter = {
    Gender: [
      {
        name: "Men",
        isChecked: false,
      },
      {
        name: "Women",
        isChecked: false,
      },
    ],
    Category: [
      {
        name: "Leggings",
        isChecked: false,
      },
      {
        name: "Shirts",
        isChecked: false,
      },
      {
        name: "Coats & Jackets",
        isChecked: false,
      },
      {
        name: "Joggers",
        isChecked: false,
      },
      {
        name: "Hoodies & Sweatshirts",
        isChecked: false,
      },
      {
        name: "Accessories",
        isChecked: false,
      },
      {
        name: "Bags",
        isChecked: false,
      },
      {
        name: "Bodysuits",
        isChecked: false,
      },
      {
        name: "Button Down Shirts",
        isChecked: false,
      },
      {
        name: "Capris",
        isChecked: false,
      },
      {
        name: "Dresses",
        isChecked: false,
      },
      {
        name: "Hair Accessories",
        isChecked: false,
      },
      {
        name: "Hats",
        isChecked: false,
      },
      {
        name: "Long Sleeve Shirts",
        isChecked: false,
      },
      {
        name: "Pants",
        isChecked: false,
      },
      {
        name: "Polo Shirts",
        isChecked: false,
      },
      {
        name: "Shoes",
        isChecked: false,
      },
      {
        name: "Short Sleeve Shirts",
        isChecked: false,
      },
      {
        name: "Shorts",
        isChecked: false,
      },
      {
        name: "Socks",
        isChecked: false,
      },
      {
        name: "Sports Bras",
        isChecked: false,
      },
      {
        name: "Sweaters",
        isChecked: false,
      },
      {
        name: "Sweatpants",
        isChecked: false,
      },
      {
        name: "T-Shirts",
        isChecked: false,
      },
      {
        name: "Tank Tops",
        isChecked: false,
      },
      {
        name: "Team Canada",
        isChecked: false,
      },
      {
        name: "Track Pants",
        isChecked: false,
      },
      {
        name: "Trousers",
        isChecked: false,
      },
      {
        name: "Underwear",
        isChecked: false,
      },
      {
        name: "Water Bottles",
        isChecked: false,
      },
      {
        name: "Yoga Accessories",
        isChecked: false,
      },
      {
        name: "Yoga Mats",
        isChecked: false,
      },
      {
        name: "Hoodies",
        isChecked: false,
      },
    ],
  };

  const title = "women's what's new";

  const filterKeys = Object.keys(filter);

  return (
    <div className="filters">
      {filterKeys.map((e, index) => {
        return (
          <div className="filter" key={index}>
            <div className="filter_expand">
              <h4>{e}</h4>
              <PlusMinus />
            </div>
            <div className="filter_choice">
              {filter[e].map((choice, i) => {
                return (
                  <div className="filter_choice_row" key={i}>
                    <div className={choice.isChecked ? "checkbox" : ""}>
                      <FaCheck />
                    </div>
                    <p>{choice.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
