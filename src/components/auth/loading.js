import { CircularProgress } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./loading.scss";
export default function Loading(props) {
  //const dispatch=useDispatch()
  //const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
  return (
    <div className="loading">
      <div>
        <CircularProgress />
      </div>
      {/* <div className="loading_back"></div> */}
    </div>
  );
}
