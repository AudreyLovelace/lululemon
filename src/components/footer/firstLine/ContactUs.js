import "./boxes.scss";
import { Link } from "react-router-dom";
import { arrow } from "../../../helper/constants";
import { useState } from "react";

const ContactUs = () => {
  const data = [
    { id: 0, label: "Live Chat" },
    { id: 1, label: "Email Sign Up" },
    { id: 3, label: "Contact Us" },
  ];

  const [isOpen, setOpen] = useState(false);

  const dropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="box">
        <Link to="./" className="box_header_title">
          Contact Us
        </Link>
        <div className="box_detail">
          {data.map((item) => {
            return (
              <Link to="./" key={item.id} className="box_detail text">
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-header" onClick={dropDown}>
          Contact Us
          <div className={isOpen ? "iconFirst open" : "iconFirst"}>{arrow}</div>
        </div>

        <div className={`dropdown-body ${isOpen && "open"}`}>
          {data.map((item, i) => {
            return (
              <Link to="./" key={i} className="box_detail text dropdown-item">
                {item.label}
              </Link>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ContactUs;
