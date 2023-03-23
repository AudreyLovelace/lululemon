import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./Carousel.scss";
import { BsChevronLeft, BsChevronRight, BsZoomIn } from "react-icons/bs";
import ProductPopUp from "./ProductPopUp";
export default function Carousel({ media, name }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const dotWidth = "8px";
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <ProductPopUp media={media} name={name} setOpen={setOpen} />}
      <div className="carousel">
        <div
          className="library"
          onClick={() => {
            setOpen(true);
          }}
        >
          <div
            className="left"
            onClick={(e) => {
              e.stopPropagation();
              if (page > 0) {
                setPage((prev) => prev - 1);
              }
            }}
          >
            <BsChevronLeft />
          </div>
          <div
            className="right"
            onClick={(e) => {
              e.stopPropagation();
              if (page < media.length - 1) {
                setPage((prev) => prev + 1);
              }
            }}
          >
            <BsChevronRight />
          </div>
          <div className="zoom_in">
            <BsZoomIn />
          </div>
          <div
            className="frame"
            style={{ transform: `translateX(-${page}00%)` }}
          >
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
              <div className="thumbnails_one" key={index}>
                <img
                  src={e}
                  alt=""
                  onClick={() => {
                    setPage(index);
                  }}
                />
                <div className={page === index ? "chosen" : ""}></div>
              </div>
            );
          })}
        </div>
        <div
          className="dots"
          style={{
            gridTemplateColumns: `repeat(${media.length}, ${dotWidth})`,
          }}
        >
          {media.map((e, index) => {
            return (
              <div
                className={page === index ? "chosen" : ""}
                key={index}
                onClick={() => {
                  setPage(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
