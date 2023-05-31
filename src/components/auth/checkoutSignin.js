import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { authAction, nestAxios } from "../../actions/authAction";
import "./checkoutSignin.scss";
import LoginError from "./loginError";
export default function CheckoutSignin(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailValidity, setEmailValidity] = useState("new");
  const [passwordValidity, setPasswordValidity] = useState("new");
  const [email, setEmail] = useState("a");
  //   const [load, setLoad] = useState(false);
  //   const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [error, setError] = useState(false);
  const auth = useSelector((state) => state.authReducer.signedIn);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   nestAxios
  //     .get("http://localhost:3000/auth/whoami")
  //     .then((res) => {
  //       // console.log(res.data.email);

  //       dispatch(authAction.whoAmI(res.data.email));
  //     })
  //     .catch((e) => {
  //       dispatch(authAction.signedOff());
  //     });
  // }, [auth]);
  return (
    <>
      {error && <LoginError />}
      <form
        onSubmit={async (e) => {
          if (emailValidity && passwordValidity && passwordValidity !== "new") {
            e.preventDefault();
            // console.log(e);
            try {
              const user = await nestAxios.post(
                "http://localhost:3000/auth/signin",
                { email: e.target[0].value, password: e.target[1].value }
              );
              dispatch(authAction.signedIn());
              // nestAxios.get("http://localhost:3000/auth/whoami").then((res) => {
              //   // console.log(res.data.email);

              //   dispatch(authAction.whoAmI(res.data.email));
              // dispatch(authAction.whoAmI(e.target[0].value));
              // });

              navigate("/ship");
            } catch (error) {
              setError(true);
            }
          }
        }}
      >
        <div>
          <div>
            <label htmlFor="signinEmail">Email address</label>
            <input
              type="email"
              name="signinEmail"
              id="signinEmail"
              required
              onChange={(e) => {
                setEmailValidity(emailPattern.test(e.target.value));
                setEmail(e.target.value);
              }}
            />
            {!emailValidity && Boolean(email.length) && (
              <p className="error">
                Email address is not in the correct format (xxx@yyy.zzz). Please
                correct the email address
              </p>
            )}
            {!email.length && (
              <p className="error">Please enter an email address</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => {
                setPasswordValidity(e.target.value.length);
              }}
            />
            {!passwordValidity && (
              <p className="error">Please enter your password</p>
            )}
            <p className="info">Forgot your password?</p>{" "}
          </div>
        </div>
        <input
          type="submit"
          value="SIGN IN"
          className={
            //   load &&
            emailValidity &&
            passwordValidity &&
            passwordValidity !== "new" &&
            emailValidity !== "new"
              ? ""
              : "invalid_button"
          }
        />
        <p className="info">
          By signing in, you agree to the Terms of Use and acknowledge the
          Privacy Policy. California consumers, see our Notice of Financial
          Incentives.
        </p>
      </form>
    </>
  );
}
