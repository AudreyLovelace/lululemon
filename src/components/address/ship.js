import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";

import { nestAxios } from "../../actions/authAction";
import "./ship.scss";

import { BsPlusLg } from "react-icons/bs";
export default function ShipAddress({
  url,
  buttonValue,
  address,

  setAddresses,
  setOpen,
}) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const cart = useSelector((state) => {
    return state?.cartReducer;
  });
  // console.log(cart);

  const [newAddress, setNewAddress] = useState(
    address || {
      firstName: "a",
      lastName: "a",
      phoneNumber: "a",
      address_1: "a",
      address_2: "a",
      city: "a",
      province: "AB",
      postalCode: "a",
      country: "CAN",
    }
  );
  const {
    firstName,
    lastName,
    address_1,
    address_2,
    city,
    province,
    postalCode,
    id,
    phoneNumber,
  } = address || {};
  //npm install axios
  const [note, setNote] = useState(false);
  // console.log(newAddress);
  const [load, setLoad] = useState(false);
  // useEffect(() => {
  //   if (load) {
  //     return;
  //   }
  //   if (Object.keys(newAddress).length) {
  //     setLoad(true);
  //   }
  // }, [newAddress]);
  // console.log(load);

  return (
    <>
      <label htmlFor="firstName" style={{ gridArea: "a" }}>
        First name
      </label>
      <input
        style={{ gridArea: "b" }}
        type="text"
        name="firstName"
        id="firstName"
        required
        defaultValue={firstName}
        onChange={(e) => {
          setNewAddress((prev) => {
            return { ...prev, firstName: e.target.value };
          });
        }}
      />
      {!newAddress?.firstName?.length && (
        <p style={{ gridArea: "b" }}>Please enter your first name.</p>
      )}
      <label htmlFor="lastName" style={{ gridArea: "c" }}>
        Last name
      </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        required
        defaultValue={lastName}
        style={{ gridArea: "d" }}
        onChange={(e) => {
          setNewAddress((prev) => {
            return { ...prev, lastName: e.target.value };
          });
        }}
      />
      {!newAddress?.lastName?.length && (
        <p style={{ gridArea: "d" }}>Please enter your last name.</p>
      )}
      <label htmlFor="phoneNumber" style={{ gridArea: "e" }}>
        Phone number
      </label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        style={{ gridArea: "f" }}
        required
        defaultValue={phoneNumber}
        onChange={(e) => {
          setNewAddress((prev) => {
            return { ...prev, phoneNumber: e.target.value };
          });
        }}
      />
      {!newAddress?.phoneNumber?.length && (
        <p style={{ gridArea: "f" }}>Please enter your phone number.</p>
      )}
      <label htmlFor="address_1:" style={{ gridArea: "g" }}>
        address
      </label>
      <input
        type="text"
        name="address_1"
        id="address_1"
        required
        style={{ gridArea: "h" }}
        defaultValue={address_1}
        onChange={(e) => {
          setNewAddress((prev) => {
            return { ...prev, address_1: e.target.value };
          });
        }}
      />
      {!newAddress?.address_1?.length && (
        <p style={{ gridArea: "h" }}>Please enter your address.</p>
      )}
      {!note && (
        <p
          style={{
            gridArea: "i",
            color: "black ",
            marginTop: 0,
            marginBottom: -10,
          }}
          onClick={() => {
            setNote(true);
          }}
        >
          <BsPlusLg /> Add delivery note (e.g. company name)
        </p>
      )}
      <label
        htmlFor="address_line_2:"
        style={{ gridArea: "i" }}
        className={note ? "" : "hidden"}
      >
        Delivery note (Optional)
      </label>
      <input
        type="text"
        name="address_line_2"
        id="address_line_2"
        defaultValue={address_2}
        style={{ gridArea: "j" }}
        className={note ? "" : "hidden"}
      />
      <label htmlFor="city" style={{ gridArea: "k" }}>
        city
      </label>
      <input
        type="text"
        name="city"
        id="city"
        style={{ gridArea: "l" }}
        required
        defaultValue={city}
        onChange={(e) => {
          setNewAddress((prev) => {
            return { ...prev, city: e.target.value };
          });
        }}
      />
      {!newAddress?.city?.length && (
        <p style={{ gridArea: "l" }}>Please enter your city.</p>
      )}
      <label htmlFor="province" style={{ gridArea: "o" }}>
        province
      </label>
      <select
        name="province"
        id="province"
        style={{ gridArea: "p" }}
        // autoComplete="on"
        required
        defaultValue={province}
        onChange={(e) => {
          setNewAddress((prev) => {
            return { ...prev, province: e.target.value };
          });
        }}
      >
        <option value="">Select...</option>
        <option value="AB">Alberta</option>
        <option value="BC">British Columbia</option>
        <option value="MB">Manitoba</option>
        <option value="NB">New Brunswick</option>
        <option value="NL">Newfoundland and Labrador</option>
        <option value="NT">Northwest Territories</option>
        <option value="NS">Nova Scotia</option>
        <option value="NU">Nunavut</option>
        <option value="ON">Ontario</option>
        <option value="PE">Prince Edward Island</option>
        <option value="QC">Quebec</option>
        <option value="SK">Saskatchewan</option>
        <option value="YT">Yukon Territory</option>
      </select>
      {!newAddress?.province?.length && (
        <p style={{ gridArea: "p" }}>Please enter your province.</p>
      )}
      <label htmlFor="postalCode" style={{ gridArea: "m" }}>
        Postal code
      </label>
      <input
        type="text"
        name="postalCode"
        id="postalCode"
        style={{ gridArea: "n" }}
        required
        defaultValue={postalCode}
        onChange={(e) => {
          setNewAddress((prev) => {
            return { ...prev, postalCode: e.target.value };
          });
        }}
      />{" "}
      {!newAddress?.postalCode?.length && (
        <p style={{ gridArea: "n" }}>Please enter your postal code.</p>
      )}
    </>
  );
}
