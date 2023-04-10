import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Container, useMediaQuery } from "@mui/material";
import "./edit.scss";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import logo from "../footer/secondLine/Logo";
import { styled, useTheme } from "@mui/styles";

export const Edit = () => {
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
  };

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

  const [selectedColorId, setSelectedColorId] = useState(null);

  const handleColorName = (color) => {
    setColor(color?.swatchAlt);

    setSelectedColorId(color?.colorId);
  };

  useEffect((evt) => {
    handleColorName(evt);
  }, []);

  const Navigate = useNavigate();

  // size
  const [size, setSize] = useState(0);

  // carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  const mainCarouselImages = one?.images
    .filter((image) => image.colorId === selectedColorId)[0]
    ?.mainCarousel?.media?.split(" | ");
  // console.log('mainCarouselImage', mainCarouselImages)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? mainCarouselImages.length - 1 : prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mainCarouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

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
                <img className="img" src={mainCarouselImages[currentIndex]} />
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
                <Typography>Color: {color}</Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {one &&
                    one.swatches.map((evt, index) => {
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

                            // handleColorName(evt.colorId)
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
                        Size: <span>{size[sizes.title]}</span>
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
                <button type="submit">UPDATE ITEM</button>
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
                    Navigate("/p/:productId/:colorId");
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
};
