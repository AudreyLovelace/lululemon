import "./inputInfor.scss";
import { useEffect, useState, useRef } from "react";
import { Search } from "./Icon";
import { filterActions } from "../../../actions/filterAction";
import { useSelector, useDispatch } from "react-redux";
import PopUpSearch from "./PopUpSearch";
import { useLocation, useNavigate } from "react-router-dom";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";

export const InputInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchLink = useSelector((state) => state?.searchReducer?.searchLink);
  console.log(searchLink);

  //get all products
  // const [message, setMessage] = useState(searchLink);
  const products = useSelector((state) => state?.lululemonReducer);
  const [open, setOpen] = useState(false);
  let loading = true;
  useEffect(() => {
    if (searchLink === []) {
      return;
    }
    function search() {
      if (searchLink.length && products.length) {
        //filter products which name contains message
        const message1 = searchLink?.toLowerCase().split(" ");
        const message2 = searchLink;
        // console.log(message1);
        // setMessage(null);
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

        const pageParams = {
          totalProducts: `${newProduct.length} results for "${message2}"`,
          perPage: newProduct.length,
          curPage: 1,
          totalPage: 1,
        };

        dispatch(
          filterActions.searchProducts(newProduct, pageParams, message2)
        );
      }
    }
    const timerId = setTimeout(search, 2000);
    return () => {
      loading = false;
      clearTimeout(timerId);
    };
  }, [searchLink]);
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="searchBar">
      <form
        className="search_form"
        onSubmit={(e) => {
          //   console.log(e.target);
          e.preventDefault();
          setOpen(false);
          // setMessage(e.target[0].value);
          dispatch(filterActions.searchLink(e.target[0].value));
          e.target[0].value = null;
          //clear filter
          filterActions.initPage(dispatch);
          if (pathname !== "/") {
            navigate("/");
          }
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
            // setMessage={setMessage}
            dispatch={dispatch}
          />
        )}
      </form>
    </div>
  );
};
