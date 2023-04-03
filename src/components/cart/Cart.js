import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import CartItemDesktop from "./CartItemDesktop";
import LaterItemDesktop from "./LaterItemDesktop";
import LaterItemTablet from "./LaterItemTablet";
import Warning from "./Warning";
import { FaCcPaypal } from "react-icons/fa";
import "./Cart.scss";
import CartItemTablet from "./CartItemTablet";
import Summary from "./Summary";
export default function Cart(props) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const cart = useSelector((state) => {
    return state?.cartReducer;
  });
  const later = useSelector((state) => {
    return state?.saveLaterReducer;
  });
  const total = cart?.reduce((t, b) => {
    return t + Number(b.quantity);
  }, 0);
  const subTotal = cart?.reduce((total, p) => {
    return total + Number(p.price) * Number(p.quantity);
  }, 0);
  // console.log(cart);
  const [dropdownIndex, setDropdownIndex] = useState(-1);

  const logo = (
    <svg
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
    >
      <path
        d="M13.499 0C20.956 0 27 6.045 27 13.5 27 20.957 20.956 27 13.499 27 6.044 27 0 20.958 0 13.5 0 6.044 6.044 0 13.499 0zm7.076 20.18c-.425 0-.825-.127-1.22-.391-2.184-1.454-1.438-3.198.053-5.897.63-1.145 1.282-2.324 1.572-3.542.311-1.31.594-3.22-.542-4.664-.534-.677-1.347-1.2-2.413-1.554-1.112-.367-2.54-.566-4.25-.589l-.118-.003-.434.003c-1.709.023-3.139.222-4.248.589-1.068.354-1.88.876-2.415 1.554-1.136 1.445-.853 3.354-.54 4.664.288 1.218.941 2.4 1.57 3.541 1.491 2.7 2.238 4.444.052 5.898-.394.264-.792.39-1.218.39-.85 0-1.83-.425-2.352-.685l.127.223c1.08 1.621 2.468 2.483 4.01 2.483.676 0 1.39-.164 2.12-.488.775-.343 1.455-.971 1.917-1.769.46-.798.643-1.657.512-2.421-.158-.685-.516-1.606-.927-2.673-1.077-2.783-2.548-6.588-1.278-8.449.536-.785 1.5-1.169 2.945-1.174 1.447.005 2.41.389 2.946 1.174 1.272 1.861-.2 5.666-1.275 8.445-.413 1.068-.77 1.99-.928 2.67-.132.771.05 1.63.512 2.428s1.142 1.426 1.917 1.77c.73.323 1.444.487 2.12.487 1.542 0 2.93-.862 4.015-2.49l.122-.216c-.52.26-1.5.686-2.352.686z"
        id="Combined-Shape"
        fillRule="nonzero"
        fill="#d31334"
      ></path>
    </svg>
  );

  const location = (
    <svg
      height="24"
      width="18"
      viewBox="0 0 18 24"
      xmlns="http://www.w3.org/2000/svg"
      className="edd-panel_locationIcon__fwLL_"
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M9 20.88a.73.73 0 0 1-.72-.72c0-1.306-1.594-3.149-2.765-4.502l-.355-.452c-1.555-1.824-3.485-4.09-3.485-7.45A7.133 7.133 0 0 1 9 .903a7.133 7.133 0 0 1 7.363 6.855c0 3.36-1.92 5.625-3.485 7.45l-.393.45c-1.171 1.354-2.765 3.197-2.765 4.503a.73.73 0 0 1-.72.72ZM9 2.342a5.693 5.693 0 0 0-5.923 5.415c0 2.803 1.593 4.723 3.139 6.509l.394.45A21.398 21.398 0 0 1 9 17.867a21.398 21.398 0 0 1 2.39-3.15l.394-.45c1.546-1.786 3.14-3.706 3.14-6.51A5.693 5.693 0 0 0 9 2.343Zm0 8.938a3.12 3.12 0 1 1 3.12-3.12A3.13 3.13 0 0 1 9 11.28Zm0-4.8a1.68 1.68 0 1 0 1.68 1.68A1.69 1.69 0 0 0 9 6.48Zm8.4 13.68c0-1.325-1.411-2.438-3.84-3.062a.96.96 0 0 0-1.19.758l-.077.442c2.371.432 3.657 1.286 3.657 1.862 0 .883-2.707 2.16-6.96 2.16-4.252 0-6.95-1.277-6.95-2.16 0-.576 1.286-1.43 3.658-1.862l-.077-.442a.96.96 0 0 0-1.19-.758C2.01 17.722.59 18.835.59 20.16c0 2.362 4.223 3.6 8.4 3.6 4.175 0 8.409-1.238 8.409-3.6Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setDropdownIndex(-1);
      }}
      className="cart"
    >
      <div className="cart_item_tablet">
        <nav>
          <Link to="/">{logo}</Link>
        </nav>
        <div className="container">
          <header>
            <h1>
              My Bag <span>({total} Items)</span>
            </h1>

            <h3>${subTotal.toFixed(2)}</h3>
          </header>
          <div className="checkout_buttons">
            <button>{logo} CHECKOUT</button>
          </div>
          <Warning /> <div className="container"></div>
          {cart?.map((e, index) => {
            return <CartItemTablet e={e} index={index} key={index} />;
          })}
          <Summary subTotal={subTotal} />{" "}
          <div className="checkout_buttons">
            <button>{logo} CHECKOUT</button>
          </div>
          <div className="later">
            <h1>Saved for Later</h1>
            {later?.map((e, index) => {
              return (
                <LaterItemTablet
                  e={e}
                  index={index}
                  key={index}
                  dropdownIndex={dropdownIndex}
                  setDropdownIndex={setDropdownIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="cart_item_desktop">
        <nav>
          <Link to="/">{logo}</Link>
        </nav>
        <div className="container">
          <div className="left">
            <h1>
              My Bag <span>({total} Items)</span>
            </h1>
            <Warning />
            {cart?.map((e, index) => {
              return (
                <CartItemDesktop
                  e={e}
                  index={index}
                  key={index}
                  dropdownIndex={dropdownIndex}
                  setDropdownIndex={setDropdownIndex}
                />
              );
            })}
            {!!later.length && <h2>Saved for Later</h2>}
            {later?.map((e, index) => {
              return (
                <LaterItemDesktop
                  e={e}
                  index={index}
                  key={index}
                  dropdownIndex={dropdownIndex}
                  setDropdownIndex={setDropdownIndex}
                />
              );
            })}
          </div>
          <div className="right">
            <h1>Order Summary</h1>
            <Summary subTotal={subTotal} />
            <div className="checkout_buttons">
              <button>{logo} CHECKOUT</button>
              <p>or checkout quickly with</p>
              <button className="paypal">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                  data-v-b01da731=""
                  alt=""
                  role="presentation"
                  className="paypal-logo paypal-logo-paypal paypal-logo-color-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
