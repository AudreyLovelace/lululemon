import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { authAction, nestAxios } from "../../actions/authAction";
import { BsCheck2 } from "react-icons/bs";
export default function SignupForm(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const oneUpper = /[A-Z]/;
  const oneDigit = /\d/;
  const oneLower = /[a-z]/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailValidity, setEmailValidity] = useState(true);
  const [passwordValidity, setPasswordValidity] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [triedSubmit, setTriedSubmit] = useState(false);
  function signin(e) {
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
          console.log(res);

          dispatch(authAction.signedIn());
          navigate("/");
        }
      });
  }

  return (
    <div className="signup">
      <h2>Create a member account</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          setSubmit(true);
          setTriedSubmit(true);
          nestAxios
            .post("http://localhost:3000/auth/register", {
              email: e.target[0].value,
              password: e.target[1].value,
            })
            .then((res) => {
              signin(e);
              setSubmit(false);
            })
            .catch((error) => {
              setSubmit(false);
              setError(error.response.data.message);
              // console.log(error.response.data.message);
            });
        }}
      >
        <label htmlFor="email">email:</label>
        <input
          onChange={(e) => {
            if (error) {
              setError("");
            }
            setEmail(e.target.value);
            setEmailValidity(emailPattern.test(e.target.value));
          }}
          type="email"
          name="email"
          id="email"
          required
        />
        {triedSubmit && !email.length && (
          <p className="error">Please enter an email address</p>
        )}
        {triedSubmit && !emailPattern.test(email) && !!email.length && (
          <p className="error">
            Email address is not in the correct format (xxx@yyy.zzz). Please
            correct the email address.
          </p>
        )}
        <label htmlFor="password">password:</label>
        <input
          onChange={(e) => {
            if (error) {
              setError("");
            }
            // console.log(e.target.value);
            setPassword(e.target.value);
            setPasswordValidity(pattern.test(e.target.value));
          }}
          type="password"
          name="password"
          id="password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          required
        />
        <ul>
          <li>
            <span style={{ opacity: password.length >= 8 ? 1 : 0 }}>
              <BsCheck2 />
            </span>
            8 characters
          </li>
          <li>
            <span style={{ opacity: oneUpper.test(password) ? 1 : 0 }}>
              <BsCheck2 />
            </span>
            1 uppercase
          </li>
          <li>
            <span style={{ opacity: oneLower.test(password) ? 1 : 0 }}>
              <BsCheck2 />
            </span>
            1 lowercase
          </li>
          <li>
            {" "}
            <span style={{ opacity: oneDigit.test(password) ? 1 : 0 }}>
              <BsCheck2 />
            </span>
            1 digit
          </li>
        </ul>
        <p className="error">{error ? error : ""}</p>
        <button
          type="submit"
          style={{
            backgroundColor:
              emailValidity && passwordValidity && !submit ? "#d31334" : "grey",
          }}
        >
          CREATE A LULULEMON ACCOUNT
        </button>
        <p>
          By clicking "Create Member Account" you agree to the Terms of Use and
          to join lululemon Membership. See our Privacy Policy for details about
          our information practices. California consumers, also see our Notice
          of Financial Incentives. lululemon will use information you submit
          (including identifiers, commercial information, and internet or other
          electronic network activity information) to fulfill this request.
        </p>
      </form>
    </div>
  );
}
