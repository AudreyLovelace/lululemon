import { filterTypes } from "../actions/filterAction";
const initState = {
  Gender: [
    {
      name: "Men",
      isChecked: false,
    },
    {
      name: "Women",
      isChecked: false,
    },
  ],
  Size: [
    {
      name: "0",
      isChecked: false,
    },
    {
      name: "2",
      isChecked: false,
    },
    {
      name: "4",
      isChecked: false,
    },
    {
      name: "5",
      isChecked: false,
    },
    {
      name: "5.5",
      isChecked: false,
    },
    {
      name: "6",
      isChecked: false,
    },
    {
      name: "6.5",
      isChecked: false,
    },
    {
      name: "7",
      isChecked: false,
    },
    {
      name: "7.5",
      isChecked: false,
    },
    {
      name: "8",
      isChecked: false,
    },
    {
      name: "8.5",
      isChecked: false,
    },
    {
      name: "9",
      isChecked: false,
    },
    {
      name: "9.5",
      isChecked: false,
    },
    {
      name: "10",
      isChecked: false,
    },
    {
      name: "10.5",
      isChecked: false,
    },
    {
      name: "11",
      isChecked: false,
    },
    {
      name: "12",
      isChecked: false,
    },
    {
      name: "14",
      isChecked: false,
    },
    {
      name: "16",
      isChecked: false,
    },
    {
      name: "18",
      isChecked: false,
    },
    {
      name: "20",
      isChecked: false,
    },
    {
      name: "26",
      isChecked: false,
    },
    {
      name: "27",
      isChecked: false,
    },
    {
      name: "28",
      isChecked: false,
    },
    {
      name: "29",
      isChecked: false,
    },
    {
      name: "30",
      isChecked: false,
    },
    {
      name: "31",
      isChecked: false,
    },
    {
      name: "32",
      isChecked: false,
    },
    {
      name: "33",
      isChecked: false,
    },
    {
      name: "34",
      isChecked: false,
    },
    {
      name: "35",
      isChecked: false,
    },
    {
      name: "36",
      isChecked: false,
    },
    {
      name: "37",
      isChecked: false,
    },
    {
      name: "38",
      isChecked: false,
    },
    {
      name: "39",
      isChecked: false,
    },
    {
      name: "40",
      isChecked: false,
    },
    {
      name: "42",
      isChecked: false,
    },
    {
      name: "44",
      isChecked: false,
    },
    {
      name: "46",
      isChecked: false,
    },
    {
      name: "sizeDivider",
      isChecked: false,
    },
    {
      name: "XS",
      isChecked: false,
    },
    {
      name: "XS/S",
      isChecked: false,
    },
    {
      name: "S",
      isChecked: false,
    },
    {
      name: "S/M",
      isChecked: false,
    },
    {
      name: "M",
      isChecked: false,
    },
    {
      name: "M/L",
      isChecked: false,
    },
    {
      name: "L",
      isChecked: false,
    },
    {
      name: "L/XL",
      isChecked: false,
    },
    {
      name: "XL",
      isChecked: false,
    },
    {
      name: "XL/XXL",
      isChecked: false,
    },
    {
      name: "XXL",
      isChecked: false,
    },
    {
      name: "XXXL",
      isChecked: false,
    },
    {
      name: "sizeDivider",
      isChecked: false,
    },
    {
      name: "ONE SIZE",
      isChecked: false,
    },
  ],
  Category: [
    {
      name: "Leggings",
      isChecked: false,
    },
    {
      name: "Shirts",
      isChecked: false,
    },
    {
      name: "Coats & Jackets",
      isChecked: false,
    },
    {
      name: "Joggers",
      isChecked: false,
    },
    {
      name: "Hoodies & Sweatshirts",
      isChecked: false,
    },
    {
      name: "Accessories",
      isChecked: false,
    },
    {
      name: "Bags",
      isChecked: false,
    },
    {
      name: "Bodysuits",
      isChecked: false,
    },
    {
      name: "Button Down Shirts",
      isChecked: false,
    },
    {
      name: "Capris",
      isChecked: false,
    },
    {
      name: "Dresses",
      isChecked: false,
    },
    {
      name: "Hair Accessories",
      isChecked: false,
    },
    {
      name: "Hats",
      isChecked: false,
    },
    {
      name: "Long Sleeve Shirts",
      isChecked: false,
    },
    {
      name: "Pants",
      isChecked: false,
    },
  ],
  Colour: [
    {
      swatch:
        "http://api-lulu.hibitbyte.com/static/images/swatches/Camo_filterSwatch.jpg",
      alt: "Camo",
      isChecked: false,
    },
    {
      swatch:
        "http://api-lulu.hibitbyte.com/static/images/swatches/Khaki_filterSwatch.jpg",
      alt: "Khaki",
      isChecked: false,
    },
    {
      swatch:
        "http://api-lulu.hibitbyte.com/static/images/swatches/Neon_filterSwatch.jpg",
      alt: "Neon",
      isChecked: false,
    },
    {
      swatch:
        "http://api-lulu.hibitbyte.com/static/images/swatches/Printed_filterSwatch.jpg",
      alt: "Printed",
      isChecked: false,
    },
    {
      swatch:
        "http://api-lulu.hibitbyte.com/static/images/swatches/Black_filterSwatch.jpg",
      alt: "Black",
      isChecked: false,
    },
    {
      swatch:
        "http://api-lulu.hibitbyte.com/static/images/swatches/Blue_filterSwatch.jpg",
      alt: "Blue",
      isChecked: false,
    },
  ],
};
export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case filterTypes.checkbox: {
      //   console.log(action.payload);

      let newState = { ...state };
      let key = action.payload[0];
      let index = action.payload[1];
      if (newState[key][index].isChecked) {
        newState[key][index].isChecked = false;
      } else {
        newState[key][index].isChecked = true;
      }
      // console.log(newState);

      return newState;
    }
    default:
      return state;
  }
};
