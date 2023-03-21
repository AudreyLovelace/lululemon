import "./inputInfor.scss";
import { useEffect, useState } from "react";
import { Search } from "./Icon";
import { filterActions } from "../../../actions/filterAction";
import { useSelector, useDispatch } from "react-redux";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";

export const InputInfo = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState([]);

  //get all products
  const products = useSelector((state) => state?.lululemonReducer);

  useEffect(() => {
    if (message.length && products.length) {
      //filter products which name contains message

      const message1 = message;
      setMessage([]);
      const newProduct = products.filter((product) => {
        const rightMatch = message.length;
        let result = 0;
        message1.forEach((word) => {
          if (product?.name?.toLowerCase().includes(word)) {
            result++;
          }
        });
        return result === rightMatch;
      });
      const pageParams = {
        totalProducts: newProduct.length,
        perPage: newProduct.length,
        curPage: 1,
        totalPage: 1,
      };
      dispatch(filterActions.searchProducts(newProduct, pageParams));
    }
  }, [products]);

  return (
    <div className="searchBar">
      <form
        className="search_form"
        onSubmit={(e) => {
          console.log(e.target);
          e.preventDefault();
          const words = e.target[0].value.toLowerCase().split(" ");
          setMessage(words);
          e.target[0].value = null;
          //clear filter
          filterActions.initPage(dispatch);
        }}
      >
        <Search />

        <input type="text" placeholder="Search" className="search_input" />
      </form>
    </div>
  );
};
