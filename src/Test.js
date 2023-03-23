import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./Test.scss";
export default function Test(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const ele = useRef();
  useEffect(() => {
    function handleScroll(e) {
      //   console.log(e);
      console.log(document.documentElement.scrollTop, ele.current.scrollTop);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="test" ref={ele}>
        <div className="left">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <div className="right">
          <div className="right_inner">
            <p>b</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p> <p>a</p> <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>c</p>
          </div>
        </div>
      </div>
      <div>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </div>
    </>
  );
}
