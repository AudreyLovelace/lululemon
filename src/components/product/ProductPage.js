import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams, Navigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import Carousel from "./Carousel";
import "./ProductPage.scss";
export default function ProductPage(props) {
  const one = {
    productId: "prod9820681",
    swatches: [
      {
        colorId: "47824",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Water_Drop_47824.jpg",
        swatchAlt: "Water Drop",
      },
      {
        colorId: "26375",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Moonlit_Magenta_26375.jpg",
        swatchAlt: "Moonlit Magenta",
      },
      {
        colorId: "43635",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Tidewater_Teal_43635.jpg",
        swatchAlt: "Tidewater Teal",
      },
      {
        colorId: "45772",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Brier_Rose_45772.jpg",
        swatchAlt: "Brier Rose",
      },
      {
        colorId: "0001",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Black_0001.jpg",
        swatchAlt: "Black",
      },
      {
        colorId: "45609",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Ancient_Copper_45609.jpg",
        swatchAlt: "Ancient Copper",
      },
      {
        colorId: "47809",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Red_Merlot_47809.jpg",
        swatchAlt: "Red Merlot",
      },
      {
        colorId: "47184",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Heritage_365_Camo_Deep_Coal_Multi_47184.jpg",
        swatchAlt: "Heritage 365 Camo Deep Coal Multi",
      },
      {
        colorId: "26083",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Dark_Olive_26083.jpg",
        swatchAlt: "Dark Olive",
      },
      {
        colorId: "43990",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/Diamond_Dye_Pitch_Grey_Graphite_Grey_43990.jpg",
        swatchAlt: "Diamond Dye Pitch Grey Graphite Grey",
      },
      {
        colorId: "31382",
        swatch:
          "http://api-lulu.hibitbyte.com/static/images/swatches/True_Navy_31382.jpg",
        swatchAlt: "True Navy",
      },
    ],
    images: [
      {
        colorId: "47824",
        colorAlt: "Water Drop",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47824/prod9820681_47824_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47824/prod9820681_47824_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47824/prod9820681_47824_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47824/prod9820681_47824_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47824/prod9820681_47824_img4.jpg",
          alt: "Water Drop Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47824/prod9820681_47824_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47824/prod9820681_47824_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "26375",
        colorAlt: "Moonlit Magenta",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_img5.jpg",
          alt: "moonlit magenta Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26375/prod9820681_26375_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "43635",
        colorAlt: "Tidewater Teal",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43635/prod9820681_43635_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43635/prod9820681_43635_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43635/prod9820681_43635_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43635/prod9820681_43635_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43635/prod9820681_43635_img4.jpg",
          alt: "Tidewater Teal Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43635/prod9820681_43635_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43635/prod9820681_43635_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "45772",
        colorAlt: "Brier Rose",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45772/prod9820681_45772_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45772/prod9820681_45772_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45772/prod9820681_45772_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45772/prod9820681_45772_img3.jpg",
          alt: "Brier Rose Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45772/prod9820681_45772_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45772/prod9820681_45772_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "0001",
        colorAlt: "Black",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/0001/prod9820681_0001_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/0001/prod9820681_0001_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/0001/prod9820681_0001_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/0001/prod9820681_0001_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/0001/prod9820681_0001_img4.jpg",
          alt: "Black Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/0001/prod9820681_0001_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/0001/prod9820681_0001_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "45609",
        colorAlt: "Ancient Copper",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_img5.jpg",
          alt: "Ancient Copper Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/45609/prod9820681_45609_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "47809",
        colorAlt: "Red Merlot",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47809/prod9820681_47809_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47809/prod9820681_47809_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47809/prod9820681_47809_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47809/prod9820681_47809_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47809/prod9820681_47809_img4.jpg",
          alt: "Red Merlot Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47809/prod9820681_47809_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47809/prod9820681_47809_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "47184",
        colorAlt: "Heritage 365 Camo Deep Coal Multi",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47184/prod9820681_47184_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47184/prod9820681_47184_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47184/prod9820681_47184_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47184/prod9820681_47184_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47184/prod9820681_47184_img4.jpg",
          alt: "Heritage 365 Camo Deep Coal Multi Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47184/prod9820681_47184_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/47184/prod9820681_47184_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "26083",
        colorAlt: "Dark Olive",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26083/prod9820681_26083_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26083/prod9820681_26083_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26083/prod9820681_26083_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26083/prod9820681_26083_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26083/prod9820681_26083_img4.jpg",
          alt: "dark olive Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26083/prod9820681_26083_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/26083/prod9820681_26083_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "43990",
        colorAlt: "Diamond Dye Pitch Grey Graphite Grey",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_img5.jpg",
          alt: "Diamond Dye Pitch Grey Graphite Grey Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/43990/prod9820681_43990_whyWeMadeThis_img1.jpg",
        ],
      },
      {
        colorId: "31382",
        colorAlt: "True Navy",
        mainCarousel: {
          media:
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_img5.jpg",
          alt: "True Navy Groove Super-High-Rise Flared Pant Nulu",
        },
        whyWeMadeThis: [
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_whyWeMadeThis_img0.jpg",
          "http://api-lulu.hibitbyte.com/static/images/productImages/prod9820681/31382/prod9820681_31382_whyWeMadeThis_img1.jpg",
        ],
      },
    ],
    name: "Groove Super-High-Rise Flared Pant Nulu",
    price: "$128 CAD",
    sizes: [
      {
        title: "Select Size",
        details: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
      },
    ],
    featureTitles: [
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_Yoga_and_On_the_Move.svg",
        title: "Designed for Yoga and On the Move",
        isLink: true,
      },
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Feels_Buttery-Soft_and_Weightless_Nulu™_Fabric.svg",
        title: "Feels Buttery-Soft and Weightless, Nulu™ Fabric",
        isLink: true,
      },
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Super-High_Rise_32.5_Length.svg",
        title: 'Super-High Rise, 32.5" Length',
        isLink: true,
      },
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features.svg",
        title: "Product Features",
        isLink: true,
      },
    ],
    whyWeMadeThis:
      "A coveted classic. These flared pants are perfect for your practice and beyond.",
    featurePanels: [
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_Yoga_and_On_the_Move.svg",
        title: "Designed for Yoga and On the Move",
        isPanel: false,
      },
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Feels_Buttery-Soft_and_Weightless_Nulu™_Fabric(Click_to_Expand).svg",
        title:
          "Feels Buttery-Soft and Weightless, Nulu™ Fabric(Click to Expand)",
        isPanel: true,
        content: [
          "So buttery-soft, it feels weightless",
          "Four-way stretch",
          "Sweat-wicking",
          "Breathable",
          "Added Lycra® fibre for stretch and shape retention",
        ],
      },
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Super-High_Rise_32.5_Length(Click_to_Expand).svg",
        title: 'Super-High Rise, 32.5" Length(Click to Expand)',
        isPanel: true,
        content: [
          "Hugs your body from waist to hem",
          "Flares out from the knee to hem",
          "Full length intended to sit just off the ground",
          "Super-high rise",
        ],
      },
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features(Click_to_Expand).svg",
        title: "Product Features(Click to Expand)",
        isPanel: true,
        content: [
          "Back drop-in waistband pocket holds a card, key, or cell phone",
          "This collection’s great for low-impact workouts like yoga or whenever you want to feel really, really comfortable",
        ],
      },
      {
        iconPath:
          "http://api-lulu.hibitbyte.com/static/images/icons/Material_and_care(Click_to_Expand).svg",
        title: "Material and care(Click to Expand)",
        isPanel: true,
        content: [
          "Pocket lining: 82% Nylon, 18% Lycra® elastane",
          "Gusset: 56% Polyester, 33% Coolmax® polyester, 11% Lycra® elastane",
          "Body: 81% Nylon, 19% Lycra® elastane",
          "Wash with like colours",
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Do not iron",
          "Do not dry clean",
          "Imported",
        ],
      },
    ],
  };
  //const dispatch=useDispatch()
  //const ??? = useSelector(state => state?.reducer?.???)
  //   const { productId, colorId } = useParams();
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
  const initColorId = "0";
  const productId = "prod9820681";
  const [id, setId] = useState(
    initColorId === 0 || "0" ? one?.swatches[0]?.colorId : initColorId
  );
  const [size, setSize] = useState(null);
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

  if (id) {
    return (
      <div className="product_page">
        <div className="product_page_left">
          <div className="product_page_left_top">
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
        <div className="product_page_right">
          <div className="product_page_right_top">
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
                      setId(e.colorId);
                    }}
                    className={id === e.colorId ? "chosen" : ""}
                    style={{ backgroundImage: `url(${e.swatch})` }}
                    title={e.swatchAlt}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="sizes">
            <h2>
              Select Size <span>{size}</span>
            </h2>
            <div className="size">
              {one.sizes[0].details.map((e, i) => {
                return (
                  <div
                    className={size === e ? "chosen" : ""}
                    key={i}
                    onClick={() => {
                      setSize(e);
                    }}
                  >
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
