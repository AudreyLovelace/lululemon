import "./inputInfor.scss";
import { useEffect, useState } from "react";
import { Close, Search } from "./Icon";
import { filterActions } from "../../../actions/filterAction";
import { useSelector, useDispatch } from "react-redux";
export const InputInfo = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const showCloseIcon = message.length > 0;
  const products = useSelector((state) => state?.lululemonReducer);
  useEffect(() => {
    if (message) {
      //filter products which name contains message
      const keyWord = message;
      setMessage("");
    }
  }, [products]);
  const cbInput = (evt) => {
    let newMessage = evt.target.value.trim().toLowerCase();
    if (evt.key === "Enter") {
      if (newMessage !== message) {
        setMessage(newMessage);
      }
    }
  };

  return (
    <div className="searchBar">
      <form
        className="search_form"
        onSubmit={(e) => {
          console.log(e.target);
          e.preventDefault();
          e.target[0].value = null;
          //clear filter
          filterActions.initPage(dispatch);
        }}
      >
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="search_input"
          value={message}
          onKeyDown={cbInput}
          onChange={(evt) => setMessage(evt.target.value)}
        />

        {showCloseIcon && <Close />}
        {/*todo onclick with fetch data*/}
      </form>
    </div>
  );
};
