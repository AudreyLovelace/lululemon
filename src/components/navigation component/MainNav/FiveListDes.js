import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./fiveListDes.scss";

function FiveListDes() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav
        onMouseEnter={() => {
          // console.log("Mouse entered.");
          setShowDropdown(true);
        }}
        onMouseLeave={() => {
          // console.log("Mouse left.");
          setShowDropdown(false);
        }}
        className="fiveLogo"
      >
        {/* <Link to='/' type='button' className='fiveLogo_mainBtn' showDropdown={true}> */}
        <Link to="/" type="button" className="fiveLogo_mainBtn">
          WOMEN
        </Link>
        <Link
          to="/"
          type="button"
          className="fiveLogo_mainBtn"
          //   showDropdown={true}
        >
          MEN
        </Link>
        <Link
          to="/"
          type="button"
          className="fiveLogo_mainBtn"
          //   showDropdown={true}
        >
          ACCESSORIES
        </Link>
        {showDropdown && (
          <div className="fiveLogo_mainBtn_dropdown">
            <div className="fiveLogo_mainBtn_dropdown_main">
              <div className="fiveLogo_mainBtn_dropdown_main_left">
                <div className="text">What's New</div>
                <div className="text">Bestsellers</div>
                <div className="text">Align Shop</div>
                <div className="text">New On the Move Collection</div>
                <div className="text">Pastel Shop</div>
                <div className="text">Spring Clothes Shop</div>
                <div className="text">Plus Size Clothes</div>
                <div className="text">lululemon lab</div>
                <div className="text">We Made Too Much</div>
              </div>
              <div className="fiveLogo_mainBtn_dropdown_main_middle">
                <div className="fiveLogo_mainBtn_dropdown_main_middle_topic fiveLogo_mainBtn">
                  WOMEN CLOTHES
                </div>
                <div className="fiveLogo_mainBtn_dropdown_main_middle_detail">
                  <div>
                    <div className="text">Leggings</div>
                    <div className="text">Coats & Jackets</div>
                    <div className="text">Dresses</div>
                    <div className="text">Hoodies & Sweatshirts</div>
                    <div className="text">Capris</div>
                    <div className="text">Pants</div>
                    <div className="text">Shirts</div>
                  </div>
                  <div>
                    <div className="text">Shoes</div>
                    <div className="text"></div>
                    <div className="text">Shorts</div>
                    <div className="text">Skirts</div>
                    <div className="text">Socks</div>
                    <div className="text">Sports Bras</div>
                    <div className="text">Sweaters</div>
                    <div className="text">Swimsuits</div>
                  </div>
                </div>
              </div>
              <div className="fiveLogo_mainBtn_dropdown_main_middle_detailRight">
                <div className="fiveLogo_mainBtn_dropdown_main_middle_topic fiveLogo_mainBtn">
                  ACCESSORIES
                </div>

                <div className="fiveLogo_mainBtn_dropdown_main_middle_detailRight_detail">
                  <div>
                    <div className="text">Bags</div>
                    <div className="text">Equipment</div>
                    <div className="text">Gloves & Mittens</div>
                    <div className="text">Hair Accessories</div>
                    <div className="text">Hats</div>
                    <div className="text">Scarves & Wraps</div>
                    <div className="text">Water Bottles</div>
                    <div className="text">Yoga Mats</div>
                  </div>
                </div>
              </div>
              <div className="fiveLogo_mainBtn_dropdown_main_right">
                <img
                  width="300px"
                  height="200px"
                  src="NA_Mar23_Membership_EA_Ecomm_teaser_MegaNav_D.webp"
                  alt=""
                />
                <div className="fiveLogo_mainBtn_dropdown_main_right_highLight">
                  Early access? It’s in the bag.
                </div>
                <div className="normal">
                  Go-getters deserve to move with ease. On March 21, <br></br>{" "}
                  be first to shop new styles and accessories that always keep
                  up.
                  <br></br>
                  Download the App
                </div>
              </div>
            </div>

            <div className="fiveLogo_mainBtn_dropdown_under">
              <div className="fiveLogo_mainBtn_dropdown_under_activity">
                ACTIVITY
              </div>
              <div className="fiveLogo_mainBtn_dropdown_under_sports ">
                <div className="text">Running</div>
                <div className="text">Casual</div>
                <div className="text">Tennis</div>
                <div className="text">Golf</div>
                <div className="text">Workout</div>
                <div className="text">Yoga</div>
              </div>
              <div className="fiveLogo_mainBtn_dropdown_under_shop">
                SHOP ALL WOMEN
              </div>
            </div>
          </div>
        )}
      </nav>
      <Link to="/" type="button" className="fiveLogo_mainBtn">
        SHOES
      </Link>
      <Link to="/" type="button" className="fiveLogo_mainBtn">
        STUDIO
      </Link>
    </>
  );
}

export default FiveListDes;
