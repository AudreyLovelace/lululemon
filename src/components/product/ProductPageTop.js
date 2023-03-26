import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import SearchLink from "./SearchLink";
import { BsInfoCircle } from "react-icons/bs";
import Carousel from "./Carousel";
import "./ProductPage.scss";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import PlusMinus from "../filter/PlusMinus";
import { useCallback } from "react";

export default function ProductPageTop({
  one,
  id,
  productId,
  setPanelIndex,
  panelRef,
  topChoice,
}) {
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  const store = (
    <svg
      height="24"
      width="24"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="accordionItemHeadingIcon-3fkWR"
      focusable="false"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M14.667 14.167h-.834v-8.62l.667.246a.5.5 0 0 0 .667-.46V2.667a.5.5 0 0 0-.307-.46 17.68 17.68 0 0 0-13.72 0 .5.5 0 0 0-.307.46v2.666a.5.5 0 0 0 .667.46s.667-.253.667-.246v8.62h-.834a.667.667 0 0 0-.666.666v.334h14.666v-.334a.667.667 0 0 0-.666-.666Zm-8.834 0V9.833H7.5v4.334H5.833Zm3.667 0h-1V9.833h1.667v4.334H9.5Zm3.333 0h-1.666V9.333a.507.507 0 0 0-.5-.5H5.333a.507.507 0 0 0-.5.5v4.834H3.167V5.213a17.393 17.393 0 0 1 9.666 0v8.954Zm-11-9.567V3a17.18 17.18 0 0 1 12.334 0v1.6a18.147 18.147 0 0 0-12.334 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
  const afterPay = (
    <svg
      height="24"
      width="124.87"
      viewBox="360.6 308.93 1148.88 220.83"
      className="installment-payments_afterpayIcon__1gJx0"
      focusable="false"
      role="img"
      aria-hidden="false"
      aria-label="afterpay"
    >
      <path d="m1492 353.5-34.6-19.8-35.1-20.1c-23.2-13.3-52.2 3.4-52.2 30.2v4.5c0 2.5 1.3 4.8 3.5 6l16.3 9.3c4.5 2.6 10.1-.7 10.1-5.9V347c0-5.3 5.7-8.6 10.3-6l32 18.4 31.9 18.3c4.6 2.6 4.6 9.3 0 11.9l-31.9 18.3-32 18.4c-4.6 2.6-10.3-.7-10.3-6V415c0-26.8-29-43.6-52.2-30.2l-35.1 20.1-34.6 19.8c-23.3 13.4-23.3 47.1 0 60.5l34.6 19.8 35.1 20.1c23.2 13.3 52.2-3.4 52.2-30.2v-4.5c0-2.5-1.3-4.8-3.5-6l-16.3-9.3c-4.5-2.6-10.1.7-10.1 5.9v10.7c0 5.3-5.7 8.6-10.3 6l-32-18.4-31.9-18.3c-4.6-2.6-4.6-9.3 0-11.9l31.9-18.3 32-18.4c4.6-2.6 10.3.7 10.3 6v5.3c0 26.8 29 43.6 52.2 30.2l35.1-20.1L1492 414c23.3-13.5 23.3-47.1 0-60.5zm-227 6.6-81 167.3h-33.6l30.3-62.5-47.7-104.8h34.5l30.6 70.2 33.4-70.2h33.5zm-809.9 59.4c0-20-14.5-34-32.3-34s-32.3 14.3-32.3 34c0 19.5 14.5 34 32.3 34s32.3-14 32.3-34m.3 59.4v-15.4c-8.8 10.7-21.9 17.3-37.5 17.3-32.6 0-57.3-26.1-57.3-61.3 0-34.9 25.7-61.5 58-61.5 15.2 0 28 6.7 36.8 17.1v-15h29.2v118.8h-29.2zm171.2-26.4c-10.2 0-13.1-3.8-13.1-13.8V386h18.8v-25.9h-18.8v-29h-29.9v29H545v-11.8c0-10 3.8-13.8 14.3-13.8h6.6v-23h-14.4c-24.7 0-36.4 8.1-36.4 32.8v15.9h-16.6V386h16.6v92.9H545V386h38.6v58.2c0 24.2 9.3 34.7 33.5 34.7h15.4v-26.4h-5.9zM734 408.8c-2.1-15.4-14.7-24.7-29.5-24.7-14.7 0-26.9 9-29.9 24.7H734zm-59.7 18.5c2.1 17.6 14.7 27.6 30.7 27.6 12.6 0 22.3-5.9 28-15.4h30.7c-7.1 25.2-29.7 41.3-59.4 41.3-35.9 0-61.1-25.2-61.1-61.1 0-35.9 26.6-61.8 61.8-61.8 35.4 0 61.1 26.1 61.1 61.8 0 2.6-.2 5.2-.7 7.6h-91.1zm282.2-7.8c0-19.2-14.5-34-32.3-34-17.8 0-32.3 14.3-32.3 34 0 19.5 14.5 34 32.3 34 17.8 0 32.3-14.7 32.3-34m-94.1 107.9V360.1h29.2v15.4c8.8-10.9 21.9-17.6 37.5-17.6 32.1 0 57.3 26.4 57.3 61.3s-25.7 61.5-58 61.5c-15 0-27.3-5.9-35.9-15.9v62.5h-30.1zm229.3-107.9c0-20-14.5-34-32.3-34-17.8 0-32.3 14.3-32.3 34 0 19.5 14.5 34 32.3 34 17.8 0 32.3-14 32.3-34m.3 59.4v-15.4c-8.8 10.7-21.9 17.3-37.5 17.3-32.6 0-57.3-26.1-57.3-61.3 0-34.9 25.7-61.5 58-61.5 15.2 0 28 6.7 36.8 17.1v-15h29.2v118.8H1092zM809.7 371.7s7.4-13.8 25.7-13.8c7.8 0 12.8 2.7 12.8 2.7v30.3s-11-6.8-21.1-5.4c-10.1 1.4-16.5 10.6-16.5 23v70.3h-30.2V360.1h29.2v11.6z"></path>
    </svg>
  );
  const klarna = (
    <svg
      height="24"
      width="107.52"
      viewBox="0 0 452.9 101.1"
      xmlns="http://www.w3.org/2000/svg"
      className="installment-payments_klarnaIcon__nzEEz"
      focusable="false"
      role="img"
      aria-hidden="false"
      aria-label="klarna"
    >
      <path d="M79.7 0H57.4c0 18.3-8.4 35-23 46l-8.8 6.6 34.2 46.6h28.1L56.4 56.3C71.3 41.5 79.7 21.5 79.7 0zM0 0h22.8v99.2H0zm94.5 0H116v99.2H94.5zm210.1 28.7c-8.2 0-16 2.5-21.2 9.6v-7.7H263v68.6h20.7v-36c0-10.4 7-15.5 15.4-15.5 9 0 14.2 5.4 14.2 15.4v36.2h20.5V55.6c0-16-12.7-26.9-29.2-26.9zM181 30.6V35c-5.8-4-12.8-6.3-20.4-6.3-20 0-36.2 16.2-36.2 36.2s16.2 36.2 36.2 36.2c7.6 0 14.6-2.3 20.4-6.3v4.4h20.5V30.6H181zm-18.7 51.9c-10.3 0-18.6-7.9-18.6-17.6s8.3-17.6 18.6-17.6 18.6 7.9 18.6 17.6-8.3 17.6-18.6 17.6zm71-43v-8.9h-21v68.6h21.1v-32c0-10.8 11.7-16.6 19.8-16.6h.2v-20c-8.3 0-16 3.6-20.1 8.9zm164.3-8.9V35c-5.8-4-12.8-6.3-20.4-6.3-20 0-36.2 16.2-36.2 36.2s16.2 36.2 36.2 36.2c7.6 0 14.6-2.3 20.4-6.3v4.4h20.5V30.6h-20.5zm-18.7 51.9c-10.3 0-18.6-7.9-18.6-17.6s8.3-17.6 18.6-17.6 18.6 7.9 18.6 17.6c.1 9.7-8.3 17.6-18.6 17.6zM434 32.6c0-1-.7-1.6-1.8-1.6h-1.9v5.2h.9v-1.9h1l.8 1.9h1l-.9-2.1c.6-.3.9-.8.9-1.5zm-1.8.8h-1v-1.6h1c.6 0 .9.3.9.8s-.2.8-.9.8z"></path>
      <path d="M431.9 28.8c-2.7 0-4.9 2.2-4.9 4.9.1 2.7 2.2 4.9 4.9 4.9s4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9zm0 8.9c-2.2 0-3.9-1.8-3.9-4s1.8-4 3.9-4c2.2 0 3.9 1.8 3.9 4s-1.8 4-3.9 4zm8.1 37.2c-7.1 0-12.9 5.8-12.9 12.9 0 7.1 5.8 12.9 12.9 12.9 7.1 0 12.9-5.8 12.9-12.9 0-7.2-5.8-12.9-12.9-12.9z"></path>
    </svg>
  );

  const [size, setSize] = useState({});
  // console.log(id);
  const alt = one?.swatches?.filter((e) => e?.colorId === id)[0]?.swatchAlt;
  const price = one?.price?.split(" ");
  const priceNum = price[0]?.slice(1, price[0].length);
  // console.log(price);

  const media = one?.images
    ?.filter((e) => {
      return e?.colorId === id;
    })[0]
    ?.mainCarousel?.media?.split("|");
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  const height = 200;

  function handleScroll() {
    // console.log(right.current.offsetLeft);

    if (right.current.offsetLeft < 100) {
      setMarginTop(0);
    }
    // if (left.current.clientHeight >= right.current.clientHeight) {
    //   return;
    // }
    // console.log(
    //   window.scrollY,
    //   left.current.offsetHeight,
    //   right.current.offsetHeight
    // );
    setMarginTop((prev) => {
      if (
        (window.scrollY > prev &&
          left.current.offsetHeight >= right.current.offsetHeight - 10) ||
        (window.scrollY > prev && window.scrollY < height)
      ) {
        return prev;
      }
      if (window.scrollY > prev) {
        return window.scrollY - height;
      } else {
        return window.scrollY;
      }
    });
  }
  const left = useRef();
  const right = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product_page">
      {/* {showChoice && <div className="top_choice">a</div>} */}
      <div
        className="product_page_left"
        ref={left}
        style={{ paddingTop: marginTop }}
      >
        <div className="product_page_left_top">
          <SearchLink />
          <h1>{one.name}</h1>
          <p>
            {price[0]}
            <span> {price[1]}</span>
          </p>
          <small>
            or 4 payments of ${(priceNum / 4).toFixed(2)} with {afterPay} or{" "}
            {klarna}
            <BsInfoCircle />
          </small>
        </div>
        <Carousel media={media} name={one.name} />
      </div>
      <div
        className="product_page_right"
        ref={right}
        // style={{ marginTop: -marginTop }}
      >
        <div className="product_page_right_top">
          <SearchLink />
          <h1>{one.name}</h1>
          <p>
            {price[0]}
            <span> {price[1]}</span>
          </p>{" "}
          <small>
            or 4 payments of ${(priceNum / 4).toFixed(2)} with {afterPay} or{" "}
            {klarna}
            <BsInfoCircle />{" "}
          </small>
        </div>
        <div className="colors">
          <h2>
            Colour <span>{alt}</span>
          </h2>
          <div className="color">
            {one.swatches.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    navigate(`/p/${productId}/${e.colorId}`);
                  }}
                  className={id === e.colorId ? "chosen" : ""}
                  style={{ backgroundImage: `url(${e.swatch})` }}
                  title={e.swatchAlt}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="sizes" ref={topChoice}>
          {one.sizes.map((sizes, index) => {
            return (
              <div key={index}>
                <h2>
                  {sizes.title} <span>{size[sizes.title]}</span>
                </h2>
                <div className="size">
                  {sizes.details.map((e, i) => {
                    return (
                      <div
                        className={size[sizes.title] === e ? "chosen" : ""}
                        key={i}
                        onClick={() => {
                          console.log(size);

                          setSize((prev) => {
                            prev = { ...prev };
                            prev[sizes.title] = e;
                            return prev;
                          });
                        }}
                      >
                        <p>{e}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="add_to_bag">
          <div className="ship">
            <IoRadioButtonOnOutline />
            <div>
              <h1>Ship it to me</h1>
              <h3>Free shipping and returns</h3>
            </div>
          </div>
          <div className="in_store">
            <div className="in_store_left"> {store}</div>
            <div className="in_store_right">
              <div
                className="in_store_right_title"
                onClick={() => {
                  if (expand) {
                    setExpand(false);
                  } else {
                    setExpand(true);
                  }
                }}
              >
                <h1>Pick up in store</h1>
                <PlusMinus expand={expand} />
              </div>
              {expand && (
                <p>
                  This size/colour combination is not available for Buy &
                  Pick-up at any stores near you. Try selecting another size,
                  colour or check all store inventory.
                </p>
              )}
            </div>
          </div>
          <div className="button">
            <button>ADD TO BAG</button>
          </div>
        </div>
        <div className="details">
          <h3>Details</h3>
          <ul>
            {one.featureTitles.map((e, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setPanelIndex(i);
                    panelRef.current.children[i].scrollIntoView();
                  }}
                >
                  <img src={e.iconPath} alt="/" />
                  <h2>{e.title}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
