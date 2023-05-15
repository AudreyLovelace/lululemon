import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function Signup(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const navigate = useNavigate();
  return (
    <div className="signup">
      <h1>sign up</h1>
      <form
        // action=""
        // method="post"
        onSubmit={async (e) => {
          e.preventDefault();
          // console.log(e.target[0].value);
          const signup = await axios.post(
            "http://localhost:3000/auth/register",
            {
              email: e.target[0].value,
              password: e.target[1].value,
            }
          );
          // console.log(signup);
          if (signup.status === 201) {
            const signin = await axios.post(
              "http://localhost:3000/auth/signin",
              {
                email: e.target[0].value,
                password: e.target[1].value,
              }
            );
            console.log(signin);
            if (signin.status === 201) {
              Cookies.set("luluuserId", signin.data.id);
              navigate("/");
            }
          }
          //   fetch("http://localhost:3000/auth/register", {
          //     method: "post",
          //     body: {
          //       email: e.target[0].value,
          //       password: e.target[1].value,
          //     },
          //   })
          //     .then((response) => response.json())
          //     .then((data) => {
          //       console.log(data);
          //     })
          //     .catch((error) => console.log(error));
        }}
      >
        <label htmlFor="email">email:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">password:</label>
        <input type="password" name="password" id="password" required />

        <button type="submit">CREATE A LULULEMON ACCOUNT</button>
      </form>
    </div>
  );
}
