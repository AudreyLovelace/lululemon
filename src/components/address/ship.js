import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
export default function ShipAddress() {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const cart = useSelector((state) => {
    return state?.cartReducer;
  });
  console.log(cart);
  //npm install axios
  useEffect(() => {
    Cookies.set("luluuserId", 14);
    axios
      .get("http://localhost:3000/auth/whoami")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="address">
      <h1>shipping address</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const info = e.target;
          const address = {
            firstName: info[0].value,
            lastName: info[1].value,
            address_1: info[2].value,
            address_2: info[3].value,
            city: info[4].value,
            country: info[5].value,
            province: info[6].value,
            phoneNumber: info[7].value,
          };

          console.log(address);
          // Cookies.set("luluuserId", 14);
          const storedAddress = await axios.post(
            "http://localhost:3000/address",
            address
          );
          console.log(storedAddress);
        }}
      >
        <label htmlFor="firstName">firstname:</label>
        <input type="text" name="firstName" id="firstName" required />
        <label htmlFor="lastName">lastname:</label>
        <input type="text" name="lastName" id="lastName" required />
        <label htmlFor="address_line_1:">address line 1</label>
        <input type="text" name="address_line_1" id="address_line_1" required />
        <label htmlFor="address_line_2:">address line 2</label>
        <input type="text" name="address_line_2" id="address_line_2" />
        <label htmlFor="city">city</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="country">country</label>
        <input type="text" name="country" id="country" />
        <label htmlFor="province">province</label>
        <input type="text" name="province" id="province" />
        <label htmlFor="phoneNumber">phone number:</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" />
        <input type="submit" value="save shipping address" />
      </form>
    </div>
  );
}
