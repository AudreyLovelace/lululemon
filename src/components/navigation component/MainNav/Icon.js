import "./icon.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImpulseShadow from "./ImpulseShadow";
import NavCartPopUp from "../../cart/NavCartPopUp";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
export const Icon = () => {
  return (
    <Link className="logo" to="/">
      <svg viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.499 0C20.956 0 27 6.045 27 13.5 27 20.957 20.956 27 13.499 27 6.044 27 0 20.958 0 13.5 0 6.044 6.044 0 13.499 0zm7.076 20.18c-.425 0-.825-.127-1.22-.391-2.184-1.454-1.438-3.198.053-5.897.63-1.145 1.282-2.324 1.572-3.542.311-1.31.594-3.22-.542-4.664-.534-.677-1.347-1.2-2.413-1.554-1.112-.367-2.54-.566-4.25-.589l-.118-.003-.434.003c-1.709.023-3.139.222-4.248.589-1.068.354-1.88.876-2.415 1.554-1.136 1.445-.853 3.354-.54 4.664.288 1.218.941 2.4 1.57 3.541 1.491 2.7 2.238 4.444.052 5.898-.394.264-.792.39-1.218.39-.85 0-1.83-.425-2.352-.685l.127.223c1.08 1.621 2.468 2.483 4.01 2.483.676 0 1.39-.164 2.12-.488.775-.343 1.455-.971 1.917-1.769.46-.798.643-1.657.512-2.421-.158-.685-.516-1.606-.927-2.673-1.077-2.783-2.548-6.588-1.278-8.449.536-.785 1.5-1.169 2.945-1.174 1.447.005 2.41.389 2.946 1.174 1.272 1.861-.2 5.666-1.275 8.445-.413 1.068-.77 1.99-.928 2.67-.132.771.05 1.63.512 2.428s1.142 1.426 1.917 1.77c.73.323 1.444.487 2.12.487 1.542 0 2.93-.862 4.015-2.49l.122-.216c-.52.26-1.5.686-2.352.686z"
          id="Combined-Shape"
          fillRule="nonzero"
          fill="#d31334"
        ></path>
      </svg>
    </Link>
  );
};

export const Bag = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state?.cartReducer);
  const total = cart?.reduce((t, b) => {
    return t + b.quantity;
  }, 0);
  const [cartHovered, setCartHovered] = useState(false);
  useEffect(() => {
    if (cartHovered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [cartHovered]);
  return (
    <>
      <div
        className="checkout"
        style={{ position: "relative" }}
        onMouseEnter={() => {
          if (!cartHovered) {
            setCartHovered(true);
          }
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            onClick={() => {
              navigate("/cart");
            }}
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              role="img"
              className="checkout_bag"
              aria-labelledby="icon_:rf:"
              aria-hidden="false"
            >
              {/* <title id="icon_:rf:">bagIcon</title> */}
              <path
                d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 0 0-.75.75v12A4.75 4.75 0 0 0 8 23.75h8A4.75 4.75 0 0 0 20.75 19V7a.76.76 0 0 0-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0 1 16 22.25H8A3.26 3.26 0 0 1 4.75 19V7.75H7l-.24 2.16.49.06a1 1 0 0 0 1.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 0 0 1.12.87l.49-.06L17 7.75h2.28L19.25 19z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>

          {cartHovered && <NavCartPopUp setCartHovered={setCartHovered} />}
        </div>
        <span
          className="checkout_bagInside"
          style={{ top: 5, transform: "scale(0.8)" }}
        >
          {total}
        </span>
        <ImpulseShadow total={total} />
      </div>
    </>
  );
};

export const Search = () => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="search_search"
      focusable="false"
      role="img"
      aria-labelledby="icon_:re:"
      aria-hidden="false"
    >
      <title id="icon_:re:">Search</title>
      <path
        d="m15.53 14.47-4-4a5.82 5.82 0 1 0-1.07 1.06l3.27 3.26a1 1 0 0 0 1.42 0l.38-.32ZM7 11.25A4.25 4.25 0 1 1 11.25 7 4.26 4.26 0 0 1 7 11.25Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const Close = () => {
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="search_closeIcon"
      focusable="false"
      role="img"
      aria-labelledby="icon_:rd:"
      aria-hidden="false"
      color="black"
    >
      <title id="icon_:rd:">Close</title>
      <path
        d="m13.82 1.82-.35-.35L8 6.94 3.24 2.18a1 1 0 0 0-1.42 0l-.35.35L6.94 8l-4.76 4.76a1 1 0 0 0 0 1.42l.35.35L8 9.06l4.76 4.76a1 1 0 0 0 1.42 0l.35-.35L9.06 8l4.76-4.76a1 1 0 0 0 0-1.42Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
