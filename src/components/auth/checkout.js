import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavLink,
  useNavigate,
  useParams,
  Navigate,
  Link,
} from "react-router-dom";
import "./checkout.scss";
import { GrRadial, GrRadialSelected } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";
import ShipAddress from "../address/ship";
import { nestAxios } from "../../actions/authAction";
import SavedAddress from "./savedAddress";
import { cartAction } from "../../actions/cartAction";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import CheckoutSignin from "./checkoutSignin";
import Loading from "./loading";
import Summary from "../cart/Summary";
import CheckoutSummary from "./checkoutSummary";
export default function Checkout(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)

  const auth = useSelector((state) => state.authReducer.signedIn);
  const cart = useSelector((state) => state?.cartReducer);
  // console.log(cart);
  const [loading, setLoading] = useState(false);
  const subTotal = cart.length
    ? cart?.reduce((total, p) => {
        return total + Number(p.price) * Number(p.quantity);
      }, 0)
    : 0;
  const total = cart.length
    ? cart?.reduce((t, b) => {
        return t + b.quantity;
      }, 0)
    : 0;
  const bag = (
    <svg
      height="32"
      width="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="bag-icon"
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 0 0-.75.75v12A4.75 4.75 0 0 0 8 23.75h8A4.75 4.75 0 0 0 20.75 19V7a.76.76 0 0 0-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0 1 16 22.25H8A3.26 3.26 0 0 1 4.75 19V7.75H7l-.24 2.16.49.06a1 1 0 0 0 1.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 0 0 1.12.87l.49-.06L17 7.75h2.28L19.25 19z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
  const lululogo = (
    <svg
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
    >
      <path
        d="M13.499 0C20.956 0 27 6.045 27 13.5 27 20.957 20.956 27 13.499 27 6.044 27 0 20.958 0 13.5 0 6.044 6.044 0 13.499 0zm7.076 20.18c-.425 0-.825-.127-1.22-.391-2.184-1.454-1.438-3.198.053-5.897.63-1.145 1.282-2.324 1.572-3.542.311-1.31.594-3.22-.542-4.664-.534-.677-1.347-1.2-2.413-1.554-1.112-.367-2.54-.566-4.25-.589l-.118-.003-.434.003c-1.709.023-3.139.222-4.248.589-1.068.354-1.88.876-2.415 1.554-1.136 1.445-.853 3.354-.54 4.664.288 1.218.941 2.4 1.57 3.541 1.491 2.7 2.238 4.444.052 5.898-.394.264-.792.39-1.218.39-.85 0-1.83-.425-2.352-.685l.127.223c1.08 1.621 2.468 2.483 4.01 2.483.676 0 1.39-.164 2.12-.488.775-.343 1.455-.971 1.917-1.769.46-.798.643-1.657.512-2.421-.158-.685-.516-1.606-.927-2.673-1.077-2.783-2.548-6.588-1.278-8.449.536-.785 1.5-1.169 2.945-1.174 1.447.005 2.41.389 2.946 1.174 1.272 1.861-.2 5.666-1.275 8.445-.413 1.068-.77 1.99-.928 2.67-.132.771.05 1.63.512 2.428s1.142 1.426 1.917 1.77c.73.323 1.444.487 2.12.487 1.542 0 2.93-.862 4.015-2.49l.122-.216c-.52.26-1.5.686-2.352.686z"
        id="Combined-Shape"
        fillRule="nonzero"
        fill="#d31334"
      ></path>
    </svg>
  );
  const checkedIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="checkedIcon"
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M12,17 C14.7614237,17 17,14.7614237 17,12 C17,9.23857625 14.7614237,7 12,7 C9.23857625,7 7,9.23857625 7,12 C7,14.7614237 9.23857625,17 12,17 Z"
      ></path>
    </svg>
  );
  const uncheckedIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="uncheckedIcon"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="none"
        stroke="#000"
        strokeWidth="2"
      ></circle>
    </svg>
  );
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailValidity, setEmailValidity] = useState("new");

  const email = useSelector((state) => state?.authReducer?.email);
  const [inputEmail, setInputEmail] = useState("new");
  //   console.log(email);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({ is_active: true });
  const [select, setSelect] = useState(0);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [summaryDropdown, setSummaryDropdown] = useState(true);
  useEffect(() => {
    if (auth) {
      nestAxios
        .get("http://localhost:3000/address/all")
        .then((res) => {
          const result = res.data.filter((e) => {
            return e.is_active;
          });
          setAddresses(result);
          setInputEmail(email);
          setEmailValidity(true);
          // console.log(addresses);
          if (result.length) {
            setSelect(0);
          }
        })
        .catch((e) => {});
    } else {
      setAddresses([]);
      setSelect(-1);
    }
  }, [auth]);

  useEffect(() => {
    if (select !== -1) {
      setNewAddress({ is_active: true });
    }
  }, [select]);

  useEffect(() => {
    if (!cart.length) {
      navigate("/");
    }
  }, [cart]);

  // console.log(addresses);
  function newAddressValidity() {
    const keys = [
      "firstName",
      "lastName",
      "phoneNumber",
      "address_1",
      "city",
      "province",
      "postalCode",
    ];
    let result = 0;

    keys.forEach((e) => {
      if (newAddress[e]) {
        result += 1;
      }
    });
    if (result === keys.length) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="checkout-page">
      {loading && <Loading />}
      {/* <Loading /> */}
      <nav>
        <Link to="/">{lululogo}</Link>
        <div>
          <Link to="/cart">
            {bag}
            <span>{total}</span>
          </Link>
        </div>
      </nav>
      <div className="container">
        <h1>Checkout</h1>
        <main>
          <div className="left">
            {!auth && (
              <div className="checkoutSignin">
                <h2>Have an account?</h2>
                <p
                  onClick={() => {
                    setLoginDropdown((prev) => !prev);
                  }}
                >
                  <strong>Log in</strong> to checkout more quickly and easily
                  {loginDropdown ? <BsChevronUp /> : <BsChevronDown />}
                </p>
                {loginDropdown && <CheckoutSignin />}
              </div>
            )}
            <div className="contact">
              <h2>
                {emailValidity && emailValidity !== "new" && <BsCheckCircle />}
                Contact information
              </h2>
              <p>Email address (for order notification)</p>
              <input
                type="email"
                name="contact-email"
                id="contact-email"
                defaultValue={email}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                  if (emailPattern.test(e.target.value)) {
                    setEmailValidity(true);
                  } else {
                    setEmailValidity(false);
                  }
                }}
              />
              {inputEmail?.length === 0 && (
                <p className="error">Please enter your email address.</p>
              )}
              {inputEmail?.length > 0 && !emailValidity && (
                <p className="error">
                  Please enter an email address in the format xxx@yyy.zzz
                </p>
              )}
            </div>

            {auth && (
              <div className="saved">
                <h2>
                  {" "}
                  {newAddressValidity() || (select >= 0 && <BsCheckCircle />)}
                  Shipping address
                </h2>
                {addresses.map((e, i) => {
                  return (
                    <SavedAddress
                      address={e}
                      key={i}
                      setAddresses={setAddresses}
                      checked={select === i}
                      setSelect={setSelect}
                      i={i}
                    />
                  );
                })}
              </div>
            )}
            <div className="address">
              {auth && (
                <h3
                  onClick={() => {
                    setSelect(-1);
                  }}
                >
                  {select === -1 ? checkedIcon : uncheckedIcon}
                  New shipping address
                </h3>
              )}{" "}
              {!auth && (
                <h2>
                  {newAddressValidity() && <BsCheckCircle />}
                  Shipping address
                </h2>
              )}
              {select === -1 && (
                <>
                  {" "}
                  <form
                    onChange={(e) => {
                      // console.log(e.target.parentElement[8]);
                      const info = e.target.parentElement;

                      const newAdd = {
                        firstName: info[0].value,
                        lastName: info[1].value,
                        phoneNumber: info[2].value,
                        address_1: info[3].value,
                        address_2: info[4]?.value || null,
                        city: info[5].value,
                        province: info[6].value,
                        postalCode: info[7].value.toLowerCase(),
                        country: "CAN",
                      };
                      // console.log(newAdd);

                      setNewAddress((prev) => {
                        return { ...prev, ...newAdd };
                      });
                      // console.log(newAddress);
                    }}
                  >
                    <ShipAddress newAddress={newAddress} />
                  </form>
                  <div className="save_to_account">
                    <input
                      type="checkbox"
                      name="save"
                      id="save"
                      checked={newAddress.is_active}
                      onChange={(e) => {
                        setNewAddress((prev) => {
                          return { ...prev, is_active: !prev.is_active };
                        });
                      }}
                    />
                    <label htmlFor="save">Save address to my account</label>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="right" style={{}}>
            <div style={{ position: "sticky", top: 0 }}>
              <h2>Order summary</h2>
              <div
                className="right_top"
                onClick={() => {
                  setSummaryDropdown((prev) => {
                    return !prev;
                  });
                }}
              >
                <p>
                  {bag} {total} items{" "}
                  {summaryDropdown ? <BsChevronUp /> : <BsChevronDown />}
                </p>
                <p>${subTotal.toFixed(2)}</p>
              </div>
              {summaryDropdown && <CheckoutSummary cart={cart} />}
              <ul className="summary">
                <li>
                  <p>Subtotal</p>
                  <p>${subTotal.toFixed(2)}</p>
                </li>
                <li>
                  <p>Shipping</p>
                  <p>FREE</p>
                </li>
                <li>
                  <h4>Order total</h4>
                  <h4>CAD ${subTotal.toFixed(2)}</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="nextstep">
            <button
              className={
                emailValidity &&
                emailValidity !== "new" &&
                (select >= 0 || newAddressValidity())
                  ? ""
                  : "invalid_button"
              }
              onClick={async () => {
                if (
                  emailValidity &&
                  emailValidity !== "new" &&
                  (select >= 0 || newAddressValidity())
                ) {
                  //start
                  setLoading(true);
                  let addressId = addresses.length
                    ? addresses[select]?.id || null
                    : null;
                  // let force = auth ? false : true;

                  //create user or forced log in
                  if (!auth) {
                    try {
                      //create a user with unregistered email
                      const user = await nestAxios.post(
                        "http://localhost:3000/auth/register",
                        {
                          email: inputEmail,
                          password: "Asdfhg12",
                          isActive: false,
                        }
                      );
                      if (user) {
                        const newUser = await nestAxios.post(
                          "http://localhost:3000/auth/signin",
                          {
                            email: inputEmail,
                            password: "Asdfhg12",
                          }
                        );
                      }
                    } catch (error) {
                      // console.log(1);
                      try {
                        //forced login a registered email
                        const user = await nestAxios.post(
                          "http://localhost:3000/auth/forceSignin",
                          { email: inputEmail }
                        );
                        if (user) {
                          console.log(2);
                        }
                      } catch (error) {
                        await nestAxios.get(
                          "http://localhost:3000/auth/signoff"
                        );
                      }
                    }
                  }

                  //create new address
                  try {
                    if (select === -1 && newAddressValidity()) {
                      const newAdd = await nestAxios.post(
                        "http://localhost:3000/address",
                        newAddress
                      );
                      addressId = newAdd.data.id;
                    }
                  } catch (error) {
                    if (!auth) {
                      await nestAxios.get("http://localhost:3000/auth/signoff");
                    }
                    alert("Opps! Please try later!");
                    setLoading(false);
                  }

                  //modify post
                  const products = [];
                  const productInfo = [];
                  cart.forEach((e) => {
                    products.push({
                      productId: e.productId,
                      swatchId: Number(e.colorId) || null,
                      sizeId: e.size["Select Size"] || null,
                      lengthId: e.size["Length"] || null,
                      amount: e.quantity,
                    });
                    productInfo.push({
                      unit_amount: Number(e.price) * 100,
                      name: e.name,
                      description: e.colorName + " " + e.name,
                      images: e.picture[0].trim(),
                      quantity: e.quantity,
                    });
                  });

                  //create order

                  try {
                    const order = await nestAxios.post(
                      "http://localhost:3000/order",
                      {
                        ship: addressId,
                        bill: addressId,
                        products: products,
                        productInfo: productInfo,
                        email: email || inputEmail,
                      }
                    );
                    // console.log(order);

                    if (order && !auth) {
                      await nestAxios.get("http://localhost:3000/auth/signoff");
                    }
                    // console.log(order.data.url);

                    window.location.href = order.data.url;
                  } catch (error) {
                    console.log(error);
                    if (!auth) {
                      await nestAxios.get("http://localhost:3000/auth/signoff");
                    }

                    alert("Opps! Please try later!");
                    setLoading(false);
                  }
                }
              }}
            >
              GO TO NEXT STEP
            </button>
            <small>Proceed to step 2 of 3</small>
          </div>
        </main>
      </div>
    </div>
  );
}
