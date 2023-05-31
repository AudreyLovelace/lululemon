import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { nestAxios } from "../../actions/authAction";
import ShipAddress from "../address/ship";
import "./editAddress.scss";
import TestForm from "./test";
export default function EditAddress({ setOpen, address, setAddresses }) {
  //const dispatch=useDispatch()
  //const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
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
  } = address;
  //   console.log(address);

  const [newAddress, setNewAddress] = useState(address);
  return (
    <>
      <div className="editAddress address">
        <h1>Edit shipping address</h1>
        <form
          onChange={(e) => {
            // console.log(e.target.parentElement);
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
            setNewAddress((prev) => {
              return { ...prev, ...newAdd };
            });
            // console.log(newAddress);
          }}
          onSubmit={async (e) => {
            e.preventDefault();
            // console.log(e);

            // const info = e.target;
            // const newAddress = {
            //   firstName: info[0].value,
            //   lastName: info[1].value,
            //   phoneNumber: info[2].value,
            //   address_1: info[3].value,
            //   address_2: info[4]?.value || null,
            //   city: info[5].value,
            //   province: info[6].value,
            //   postalCode: info[7].value.toLowerCase(),
            //   country: "CAN",
            // };

            // console.log(address);
            // Cookies.set("luluuserId", 14);

            const storedAddress = await nestAxios.patch(
              `http://localhost:3000/address/${id}`,
              newAddress
            );
            console.log(storedAddress);
            setAddresses(storedAddress.data);
            setOpen(false);
          }}
        >
          <ShipAddress
            url={`http://localhost:3000/address/${id}`}
            buttonValue={`SAVE CHANGES`}
            address={address}
            setAddresses={setAddresses}
            setOpen={setOpen}
            newAddress={newAddress}
          />
          <input type="submit" value="SAVE CHANGES" style={{ gridArea: "q" }} />
        </form>
        <h3
          onClick={(e) => {
            setOpen(false);
          }}
        >
          Cancel
        </h3>
      </div>
      <div
        className="pop-window-back"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      ></div>
    </>
  );
}
