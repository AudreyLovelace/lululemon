import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { cartAction } from "../../actions/cartAction";

export default function ThankYou() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
  const [second, setSecond] = useState(3);
  useEffect(() => {
    dispatch(cartAction.clearCart());
    const timerId = setTimeout(() => {
      navigate("/");
    }, 4000);
    const timerId2 = setInterval(() => {
      setSecond((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearTimeout(timerId);
      clearInterval(timerId2);
    };
  }, []);

  return (
    <>
      <p>thank you for your purchase!</p>
      <p>go to index in {second} seconds...</p>
    </>
  );
}
