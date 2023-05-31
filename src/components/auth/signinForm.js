import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { authAction, nestAxios } from "../../actions/authAction";

export default function SigninForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="signinForm">
      <h2>Sign in to your member account</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          setSubmit(true);
          nestAxios
            .post("http://localhost:3000/auth/signin", {
              email: e.target[0].value,
              password: e.target[1].value,
            })
            .then(async (res) => {
              console.log(res);
              console.log(res.data.message);
              setSubmit(false);
              if (res.status === 201) {
                dispatch(authAction.signedIn());
                navigate("/");
              }
            })
            .catch((e) => {
              setSubmit(false);
              setError(e.response.data.message);
              // console.log(e.response.data.message);
            });
        }}
      >
        <div>
          <label htmlFor="email">Email address</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => {
              if (error) {
                setError("");
              }
              setEmailValidity(emailPattern.test(e.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>{" "}
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => {
              if (error) {
                setError("");
              }
              setPasswordValidity(!!e.target.value.length);
              // console.log(emailValidity && passwordValidity);
            }}
          />
        </div>
        <p>
          {error ? (
            <span style={{ color: "#d31334", textDecoration: "none" }}>
              {error}
            </span>
          ) : (
            <span>Forgot your password?</span>
          )}
        </p>
        <div>
          {/* <input type="submit" value="SIGN IN" /> */}
          <button
            type="submit"
            style={{
              backgroundColor:
                emailValidity && passwordValidity && !submit
                  ? "#d31334"
                  : "grey",
            }}
          >
            SIGN IN
          </button>
        </div>
      </form>
      <p>
        By signing in, you agree to the <span>Terms of Use</span> and
        acknowledge the <span>Privacy Policy</span>. California consumers, see
        our <span>Notice of Financial Incentives</span>.
      </p>
    </div>
  );
}
