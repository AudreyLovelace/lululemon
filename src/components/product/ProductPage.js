import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavLink,
  useNavigate,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import Carousel from "./Carousel";
import "./ProductPage.scss";
import SearchLink from "./SearchLink";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import PlusMinus from "../filter/PlusMinus";
import MainFooter from "../footer/MainFooter";
import Review from "../review/Review";
import FeaturePanels from "./FeaturePanels";
import ProductPageTop from "./ProductPageTop";
import WhyWeMadeThis from "./WhyWeMadeThis";
import TopNavigation from "../navigation component/TopNavigation";
import { filterActions } from "../../actions/filterAction";
import axios from "axios";
import { cartAction } from "../../actions/cartAction";
import ProductPopUp from "./ProductPopUp";
import CartAdded from "./CartAdded";
import { QRCode } from "../QRcode/QRcode";
import { Recommend } from "../recommend/Recommend";

export default function ProductPage(props) {
  const currentUrl = window.location.href;
  // console.log('currentUrl is',currentUrl)

  const dispatch = useDispatch();
  //const ??? = useSelector(state => state?.reducer?.???)
  //   const { productId, colorId } = useParams();
  const { colorId } = useParams();
  // console.log(colorId);

  const initColorId = colorId;
  // console.log(initColorId);

  const { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    if (localStorage.getItem("one") && productId.length) {
      // console.log(JSON.parse(localStorage.getItem("one")));
      if (JSON.parse(localStorage.getItem("one")).productId === productId) {
        return;
      }
    }
    if (productId?.length) {
      // console.log(productId);
      filterActions.fetchOne(productId, dispatch);
    }
  }, [productId]);
  const one = useSelector((state) => state?.oneProductReducer);
  const id =
    initColorId == 0 || initColorId == undefined || initColorId == "undefined"
      ? one?.swatches[0]?.colorId
      : initColorId;
  // console.log(id);
  const [panelIndex, setPanelIndex] = useState(-1);
  const panelRef = useRef();
  const observer = useRef();
  const observer1 = useRef();
  const [showChoice, setShowChoice] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const sizeKeys = [];
  const initSizes = {};
  one?.sizes?.forEach((element) => {
    if (!element.details.length) {
      return;
    } else {
      sizeKeys.push(element.title);
      initSizes[element.title] = null;
    }
  });
  const [size, setSize] = useState(initSizes);
  let load = true;
  const topChoice = useCallback((node) => {
    // console.log(node);
    observer.current = new IntersectionObserver((entries) => {
      // console.log(entries[0].isIntersecting);
      if (load) {
        setShowChoice(!entries[0].isIntersecting);
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);
  const bottomBag = useCallback((node) => {
    observer1.current = new IntersectionObserver((entries) => {
      // console.log(entries[0].isIntersecting);
      if (load) {
        setShowBottom(!entries[0].isIntersecting);
      }
    });
    if (node) {
      observer1.current.observe(node);
    }
  }, []);
  useEffect(() => {
    return () => {
      observer.current = null;
      observer1.current = null;
      load = false;
    };
  }, []);

  function isSizeSelected() {
    let result = 0;
    sizeKeys.forEach((e) => {
      // console.log(size);

      if (size[e]) {
        result++;
      }
    });
    if (result === sizeKeys.length) {
      return true;
    } else {
      return false;
    }
  }

  const alt = one?.swatches?.filter((e) => e?.colorId === id)[0]?.swatchAlt;
  const price = one?.price?.split(" ");
  const priceNum = price[0]?.slice(1, price[0].length);
  const media = one?.images
    ?.filter((e) => {
      return e?.colorId === id;
    })[0]
    ?.mainCarousel?.media?.split("|");
  const cartInfo = {
    quantity: 1,
    productId: productId,
    colorId: id,
    size: size,
    one: one,
    name: one?.name,
    picture: media,
    price: priceNum,
    colorName: alt,
  };
  // console.log(cartInfo);
  const [open, setOpen] = useState(false);

  const [cartAdded, setCartAdded] = useState(false);
  useEffect(() => {
    if (cartAdded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [cartAdded]);
  if (!!id) {
    return (
      <div className="product_whole_page">
        {cartAdded && (
          <CartAdded
            cartInfo={cartInfo}
            setCartAdded={setCartAdded}
            cartAdded={cartAdded}
          />
        )}

        {open && (
          <ProductPopUp media={media} name={one?.name} setOpen={setOpen} />
        )}
        {showBottom && (
          <div className="fixed_add_to_bag">
            <div className="container">
              <button onClick={() => window.scrollTo(0, 0)}>ADD TO BAG</button>
            </div>
          </div>
        )}
        {showChoice && (
          <div className="top_choice sticky">
            <div className="container">
              {" "}
              <h1>{one?.name}</h1>
              <div>
                <p>Colour: </p>
                <img
                  src={
                    one?.swatches?.filter((e) => {
                      return e.colorId === id;
                    })[0]?.swatch
                  }
                  alt="/"
                />
                {sizeKeys.map((e, index) => {
                  if (size[e]) {
                    return (
                      <p key={index}>
                        {e}:<span>{size[e]}</span>
                      </p>
                    );
                  } else {
                    return null;
                  }
                })}
                {isSizeSelected() ? (
                  <button
                    onClick={() => {
                      dispatch(cartAction.addToCart(cartInfo));
                      setCartAdded(true);
                    }}
                  >
                    ADD TO BAG
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    SELECT SIZE
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <ProductPageTop
          one={one}
          id={id}
          productId={productId}
          setPanelIndex={setPanelIndex}
          panelRef={panelRef}
          topChoice={topChoice}
          size={size}
          setSize={setSize}
          bottomBag={bottomBag}
          isSizeSelected={isSizeSelected()}
          sizeKeys={sizeKeys}
          showChoice={showChoice}
          open={open}
          setOpen={setOpen}
          setCartAdded={setCartAdded}
        />

        <QRCode
          urlFromProductPage={currentUrl}
          oneFromProductPage={one}
          mediaFromProductPage={media[0]}
        />

        <WhyWeMadeThis
          why={one?.whyWeMadeThis}
          pictures={
            one?.images?.filter((e) => {
              return e.colorId === id;
            })[0]?.whyWeMadeThis || []
          }
        />
        <FeaturePanels
          panel={one.featurePanels}
          panelIndex={panelIndex}
          setPanelIndex={setPanelIndex}
          panelRef={panelRef}
        />
        <Recommend />
        <Review />
        <div className="container">
          <MainFooter />
        </div>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
