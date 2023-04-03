import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Container, useMediaQuery } from "@mui/material";
import "./Edit.scss";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import logo from "../footer/secondLine/Logo";
import { styled, useTheme } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../actions/cartAction";

export const Edit = ({ one, cartInfo, index, update }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "none",
    display: "flex",
    flexDirection: isMd ? "column" : "row",
    width: "80%",
    overflowY: "scroll",
    height: "100vh",
  };

  //color
  const [color, setColor] = useState("");

  const [selectedColorId, setSelectedColorId] = useState(cartInfo.colorId);
  useEffect(() => {
    setSelectedColorId(cartInfo.colorId);
    setColor(cartInfo.colorName);
  }, []);

  const handleColorName = (color) => {
    setColor(color?.swatchAlt);
    // console.log("color test ", color?.swatchAlt);
    setSelectedColorId(color?.colorId);
  };

  useEffect((evt) => {
    handleColorName(evt);
  }, []);

  const Navigate = useNavigate();

  // size
  const [size, setSize] = useState(cartInfo.size);

  // carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  function colorIdChoice() {
    if (selectedColorId) {
      return selectedColorId;
    } else {
      return cartInfo.colorId;
    }
  }

  const mainCarouselImages = one?.images
    .filter((image) => image.colorId === colorIdChoice())[0]
    ?.mainCarousel?.media?.split(" | ");
  // console.log('mainCarouselImage', mainCarouselImages)

  const newCartInfo = {
    ...cartInfo,
    colorId: selectedColorId,
    colorName: color,
    picture: mainCarouselImages,
    size: size,
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      console.log(mainCarouselImages.length);
      return prevIndex === 0 ? mainCarouselImages.length - 1 : prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mainCarouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (cartInfo?.colorName) {
    return (
      <div className="edit">
        <span
          onClick={(e) => {
            setOpen(true);
          }}
        >
          Edit
        </span>

        <Modal
          open={open}
          onClose={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{ maxWidth: "100%" }}>
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowCircleLeftIcon
                  className="leftArrow"
                  onClick={handlePrevClick}
                />
                <ArrowCircleRightIcon
                  className="rightArrow"
                  onClick={handleNextClick}
                />

                {mainCarouselImages ? (
                  <img
                    className="img"
                    src={mainCarouselImages[currentIndex]}
                    alt="/"
                  />
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>

            <div style={{ padding: "32px", maxWidth: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography style={{ fontSize: "22.5px", fontWeight: "600" }}>
                  {one?.name}
                </Typography>
                <Typography style={{ paddingTop: "10px" }}>
                  {one?.price}
                </Typography>

                <div style={{ margin: "15px 0 10px 0" }}>
                  <Typography>Color: {color || cartInfo.colorName}</Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {one &&
                      one.swatches.map((evt, index) => {
                        // console.log(evt);

                        return (
                          <div
                            className="colorCircle"
                            key={index}
                            style={{
                              backgroundImage: `url(${evt.swatch})`,
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              margin: "10px 10px 0 0",
                            }}
                            onClick={() => {
                              handleColorName(evt);
                              // console.log("evt.swatchAlt", evt);
                              // handleColorName(evt.colorId)
                              // console.log(evt.colorId);
                            }}
                          ></div>
                        );
                      })}
                  </div>
                </div>

                <div style={{ margin: "20px 0" }}>
                  {one.sizes.map((sizes, index) => {
                    return (
                      <div key={index}>
                        <Typography>
                          {sizes.title === "Select Size" ? "Size" : sizes.title}
                          : <span>{size[sizes.title]}</span>
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "10px 0",
                            flexWrap: "wrap",
                          }}
                        >
                          {sizes.details.map((e, i) => {
                            return (
                              <div
                                className={
                                  size[sizes.title] === e ? "sizeChose" : ""
                                }
                                key={i}
                                onClick={() => {
                                  setSize((prev) => {
                                    prev = { ...prev };
                                    prev[sizes.title] = e;
                                    return prev;
                                  });
                                }}
                                style={{
                                  width: "41px",
                                  height: "41px",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  border: "1px #d5d5d5 solid",
                                  borderRadius: "5px",
                                  margin: "0 20px 10px 0",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <p>{e}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <form>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(update(newCartInfo, index));
                    }}
                  >
                    UPDATE ITEM
                  </button>
                </form>

                <div className="viewDetail">
                  <span
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      fontSize: "16px",
                      marginTop: "15px",
                    }}
                    onClick={() => {
                      Navigate(`/p/${cartInfo.productId}/${cartInfo.colorId}`);
                    }}
                  >
                    View product details
                  </span>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};
