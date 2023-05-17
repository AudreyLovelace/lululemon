import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { nestAxios } from "../../actions/authAction";
import { authAction } from "../../actions/authAction";
import TopNavigation from "../../components/navigation component/TopNavigation";

export default function Signin(props) {
  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  const navigate = useNavigate();
  return (
    <div className="signin">
      <TopNavigation />
      <div className="container">
        {" "}
        <h1>sign in</h1>
        <form
          // action=""
          // method="post"
          onSubmit={async (e) => {
            e.preventDefault();
            // console.log(e.target[0].value);
            nestAxios
              .post("http://localhost:3000/auth/signin", {
                email: e.target[0].value,
                password: e.target[1].value,
              })
              .then(async (res) => {
                console.log(res);

                Cookies.set("luluuserId", res.data.id);
                if (res.status === 201) {
                  dispatch(authAction.signedIn());
                  // await nestAxios
                  //   .get("http://localhost:3000/auth/whoami")
                  //   .then((res) => console.log(res));
                  navigate("/");
                }
              });
            //   console.log({
            //     email: e.target[0].value,
            //     password: e.target[1].value,
            //   });

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

          <button type="submit">SIGNIN A LULULEMON ACCOUNT</button>
        </form>
      </div>
    </div>
  );
}
