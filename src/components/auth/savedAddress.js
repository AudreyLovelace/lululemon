import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import EditAddress from "./editAddress";
export default function SavedAddress({
  i,
  address,
  setAddresses,
  checked,
  setSelect,
}) {
  //const dispatch=useDispatch()
  //const navigate = useNavigate();
  //const ??? = useSelector(state => state?.reducer?.???)
  // console.log(address);

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
  // console.log(firstName);
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [open]);
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
  return (
    <>
      <div className="oneAddress">
        <div
          onClick={() => {
            setSelect(i);
          }}
        >
          {checked ? checkedIcon : uncheckedIcon}
        </div>
        <div
          onClick={() => {
            setSelect(i);
          }}
        >
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{address_1}</p>
          <p>
            {city},{province} {postalCode},CAN
          </p>
          <p>{phoneNumber}</p>
        </div>
        <div>
          <p
            onClick={() => {
              setOpen(true);
            }}
          >
            Edit
          </p>
        </div>
      </div>
      {open && (
        <EditAddress
          setOpen={setOpen}
          address={address}
          setAddresses={setAddresses}
        />
      )}
    </>
  );
}
