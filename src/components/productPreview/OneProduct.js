import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import "./OneProduct.scss";
import { BsChevronLeft, BsChevronRight, BsTypeH1 } from "react-icons/bs";

export default function OneProduct({ one }) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)

  const types = [
    "productId",
    "swatches",
    "images",
    "name",
    "price",
    "sizes",
    "featureTitles",
    "whyWeMadeThis",
    "featurePanels",
  ];
  // console.log(types);
  const [colorId, setColorId] = useState(null);
  const [i, setI] = useState(1);
  const [tabletI, setTabletI] = useState(1);

  const desktopMax = 7;
  const tabletMax = 5;
  const productNum = one.swatches.length;
  function productImg(id) {
    const product = one[types[2]].filter((e) => e.colorId === id);

    const imgArray = product[0]?.mainCarousel.media.split("|");

    if (imgArray) {
      return imgArray[0];
    }
  }
  function defaultImg() {
    const defaultImgArray = one.images[0].mainCarousel.media.split("|");
    return defaultImgArray[0];
  }
  if (one.swatches) {
    return (
      <div className="product">
        <div className="preview">
          <img src={productImg(colorId) || defaultImg()} alt="" />
        </div>
        <div className="swatches-desktop">
          <div className="swatches-desktop-arrow">
            <div
              className={i === 1 ? "disable" : ""}
              onClick={() => {
                setI((prev) => prev - 1);
              }}
            >
              <BsChevronLeft />
            </div>
          </div>
          <div className="color-checkboxes">
            {one[types[1]].map((e, index) => {
              if (index < (i - 1) * desktopMax || index >= i * desktopMax) {
                return null;
              }

              return (
                <div className="color-checkbox" key={index}>
                  <div
                    onMouseEnter={() => {
                      setColorId(e.colorId);
                    }}
                    className={
                      e.colorId === colorId ? "color-checkbox-checked" : ""
                    }
                    style={{
                      backgroundImage: `url(${e.swatch})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="swatches-desktop-arrow">
            <div
              className={i * desktopMax >= productNum ? "disable" : ""}
              onClick={() => {
                setI((prev) => prev + 1);
              }}
            >
              <BsChevronRight />
            </div>
          </div>
        </div>{" "}
        <div className="swatches-tablet">
          <div className="swatches-desktop-arrow">
            <div
              className={tabletI === 1 ? "disable" : ""}
              onClick={() => {
                setTabletI((prev) => prev - 1);
              }}
            >
              <BsChevronLeft />
            </div>
          </div>
          <div className="color-checkboxes">
            {one[types[1]].map((e, index) => {
              if (
                index < (tabletI - 1) * tabletMax ||
                index >= tabletI * tabletMax
              ) {
                return null;
              }
              return (
                <div className="color-checkbox" key={index}>
                  <div
                    onMouseEnter={() => {
                      setColorId(e.colorId);
                    }}
                    className={
                      e.colorId === colorId ? "color-checkbox-checked" : ""
                    }
                    style={{
                      backgroundImage: `url(${e.swatch})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="swatches-desktop-arrow">
            <div
              className={tabletI * tabletMax > productNum ? "disable" : ""}
              onClick={() => {
                setTabletI((prev) => prev + 1);
              }}
            >
              <BsChevronRight />
            </div>
          </div>
        </div>
        <div className="swatches-mobile">
          <div className="color-checkboxes">
            {one[types[1]].map((e, index) => {
              if (index > tabletMax) {
                return null;
              }
              if (index === tabletMax) {
                return (
                  <div key={index}>
                    <div className="more">+</div>
                  </div>
                );
              }
              return (
                <div
                  className="color-checkbox"
                  onMouseEnter={() => {
                    setColorId(e.colorId);
                  }}
                  onMouseLeave={() => {}}
                  key={index}
                >
                  <div
                    className={
                      e.colorId === colorId ? "color-checkbox-checked" : ""
                    }
                    style={{
                      backgroundImage: `url(${e.swatch})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="description">
          <h3>{one[types[3]]}</h3>
          <p>{one[types[4]]}</p>
        </div>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
