import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./Carousel.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
export default function Carousel({ media }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const dotWidth = "8px";
  const [page, setPage] = useState(0);
  return (
    <div className="carousel">
      <div className="library">
        <div
          className="left"
          onClick={() => {
            if (page > 0) {
              setPage((prev) => prev - 1);
            }
          }}
        >
          <BsChevronLeft />
        </div>
        <div
          className="right"
          onClick={() => {
            if (page < media.length - 1) {
              setPage((prev) => prev + 1);
            }
          }}
        >
          <BsChevronRight />
        </div>
        <div className="frame" style={{ transform: `translateX(-${page}00%)` }}>
          {media.map((e, index) => {
            return <img src={e} key={index} alt="" />;
          })}
        </div>
      </div>
      <div
        className="thumbnails"
        style={{ gridTemplateColumns: `repeat(${media.length}, 1fr)` }}
      >
        {media.map((e, index) => {
          return (
            <img
              src={e}
              key={index}
              alt=""
              onClick={() => {
                setPage(index);
              }}
            />
          );
        })}
      </div>
      <div
        className="dots"
        style={{ gridTemplateColumns: `repeat(${media.length}, ${dotWidth})` }}
      >
        {media.map((e, index) => {
          return (
            <div
              className="dot"
              key={index}
              onClick={() => {
                setPage(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
