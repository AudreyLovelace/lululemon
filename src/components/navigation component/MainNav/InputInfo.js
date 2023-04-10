import "./inputInfor.scss";
import { useEffect, useState, useRef } from "react";
import { Search } from "./Icon";
import { filterActions } from "../../../actions/filterAction";
import { useSelector, useDispatch } from "react-redux";
import PopUpSearch from "./PopUpSearch";
import { useLocation, useNavigate } from "react-router-dom";

export const InputInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchLink = useSelector((state) => state?.searchReducer?.searchLink);

  //get all products
  const products = useSelector((state) => state?.lululemonReducer);
  const [open, setOpen] = useState(false);
  let loading = true;
  useEffect(() => {
    if (searchLink === []) {
      return;
    }
    function search() {
      if (searchLink?.length && products?.length) {
        //filter products which name contains message
        const message1 = searchLink?.toLowerCase().split(" ");
        const message2 = searchLink;
        const newProduct = products.filter((product) => {
          const rightMatch = message1.length;
          let result = 0;
          message1.forEach((word) => {
            if (product?.name?.toLowerCase().includes(word)) {
              result++;
            }
          });
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

  // console.log(pathname);
  const [liveMessage, setLiveMessage] = useState(null);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const timerId = setTimeout(() => {
      if (liveMessage) {
        dispatch(filterActions.searchLink(liveMessage));
        filterActions.initPage(dispatch);
      }
      // else {
      //   dispatch(filterActions.clearSearchLink());
      //   filterActions.initPage(dispatch);
      // }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [liveMessage]);

  return (
    <div className="searchBar">
      <form
        className="search_form"
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(false);
          dispatch(filterActions.searchLink(e.target[0].value));
          e.target[0].value = null;
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
          onChange={(e) => {
            setOpen(false);
            if (pathname === "/") {
              if (liveMessage && !e.target.value) {
                setLiveMessage(null);
                dispatch(filterActions.clearSearchLink());
                filterActions.initPage(dispatch);
              } else {
                setLiveMessage(e.target.value);
              }
            }
          }}
        />
        {open && <PopUpSearch setOpen={setOpen} dispatch={dispatch} />}
      </form>
    </div>
  );
};
