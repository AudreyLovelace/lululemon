import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./Carousel.scss";
export default function Carousel({ media }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const [page, setPage] = useState(0);
  return (
    <div className="carousel">
      <div className="library">
        <div>
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
    </div>
  );
}
