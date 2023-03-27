import "./inputInfor.scss";
import { useEffect, useState, useRef } from "react";
import { Search } from "./Icon";
import { filterActions } from "../../../actions/filterAction";
import { useSelector, useDispatch } from "react-redux";
import PopUpSearch from "./PopUpSearch";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";

export const InputInfo = () => {
  const dispatch = useDispatch();

  const searchLink = useSelector((state) => state?.searchReducer?.searchLink);
  // console.log(searchLink);

  //get all products
  const [message, setMessage] = useState(searchLink);
  const products = useSelector((state) => state?.lululemonReducer);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (message && products.length) {
      //filter products which name contains message
      const message1 = message.toLowerCase().split(" ");
      const message2 = message;
      // console.log(message1);
      setMessage(null);
      // dispatch(filterActions.clearSearchLink());
      const newProduct = products.filter((product) => {
        const rightMatch = message1.length;
        let result = 0;
        message1.forEach((word) => {
          if (product?.name?.toLowerCase().includes(word)) {
            result++;
          }
        });
        setTimeout(() => {}, 2000);
        return result === rightMatch;
      });
      // const newProduct = products.filter((product) => {
      //   let result = false;
      //   message1.forEach((word) => {
      //     if (product?.name?.toLowerCase().includes(word)) {
      //       result = true;
      //     }
      //   });
      //   return result;
      // });
      const pageParams = {
        totalProducts: `${newProduct.length} results for "${message2}"`,
        perPage: newProduct.length,
        curPage: 1,
        totalPage: 1,
      };

      dispatch(filterActions.searchProducts(newProduct, pageParams, message2));
    }
  }, [products]);

  return (
    <div className="searchBar">
      <form
        className="search_form"
        onSubmit={(e) => {
          //   console.log(e.target);
          e.preventDefault();
          setOpen(false);
          setMessage(e.target[0].value);
          e.target[0].value = null;
          //clear filter
          filterActions.initPage(dispatch);
        }}
      >
        <Search />

        <input
          type="search"
          placeholder="Search"
          className="search_input"
          onClick={() => {
            setOpen(true);
          }}
        />
        {open && (
          <PopUpSearch
            setOpen={setOpen}
            setMessage={setMessage}
            dispatch={dispatch}
          />
        )}
      </form>
    </div>
  );
};
