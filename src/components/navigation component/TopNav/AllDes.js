import { GiftCard, Global, SignIn, StoreLocation, WishList } from "./TopIcon";
import "./AllDes.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  BagLogo,
  GiftCard1,
  LuluLogo,
  SignIn1,
  StoreLocation1,
  WishList1,
} from "./NewLogo";
import { Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AllDes = (props) => {
  const { dataFromTopNavigation } = props;
  const [isLogin, setLogin] = useState(false);
  const auth = useSelector((state) => state.authReducer.signedIn);
  const handleMyAcc = (e) => setLogin(dataFromTopNavigation);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Navigate = useNavigate();

  useEffect((evt) => {
    handleMyAcc(evt);
  }, []);

  const logo = [
    { id: 0, label: <WishList />, label1: "Wish List" },
    { id: 1, label: <GiftCard />, label1: "Gift Card" },
    { id: 2, label: <Global />, label1: "Can" },
  ];

  const logoPhone = [
    { id: 0, label: <StoreLocation1 /> },
    { id: 1, label: <WishList1 /> },
    { id: 2, label: <GiftCard1 /> },
    { id: 3, label: <BagLogo /> },
  ];

  return (
    <div className="allLine">
      <div className="topLine">
        <div className="topLine_details">
          <StoreLocation />
          <span className="topLine_details_names">Store Location</span>
        </div>
        {isLogin ? (
          <div>
            <div className="topLine_details" onClick={handleClick}>
              <SignIn />
              <p className="topLine_details_names">My Account</p>
            </div>
          </div>
        ) : (
          <div onClick={handleMyAcc}>
            <div className="topLine_details" onClick={handleClick}>
              <SignIn />
              <p
                className="topLine_details_names"
                onClick={() => {
                  Navigate("/login");
                }}
              >
                Sign In
              </p>
            </div>
            {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  Navigate("/signup");
                }}
              >
                Sign Up
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Navigate("/login");
                }}
              >
                Log In
              </MenuItem>
            </Menu> */}
          </div>
        )}
        {logo.map((item) => (
          <div key={item.id} className="topLine_details">
            {item.label}
            <span className="topLine_details_names">{item.label1}</span>
          </div>
        ))}
      </div>

      <div className="resDesLogo">
        <div>
          <Link to="./">
            <LuluLogo />
          </Link>
        </div>
        <div className="resDesLogo_fiveLoge">
          <div
            className="resDesLogo_fiveLoge_each"
            onClick={() => {
              Navigate("/login");
            }}
          >
            <SignIn1 />
          </div>
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                Navigate("/signup");
              }}
            >
              Sign Up
            </MenuItem>
            <MenuItem
              onClick={() => {
                Navigate("/login");
              }}
            >
              Log In
            </MenuItem>
          </Menu> */}

          {logoPhone.map((item) => (
            <div key={item.id} className="resDesLogo_fiveLoge_each">
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDes;
