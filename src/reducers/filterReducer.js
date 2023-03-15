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
      console.log(newState);

      return newState;
    }
    default:
      return state;
  }
};
