import "./feedback.scss";
import FeedbackBtn from "./FeedbackBtn";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
// import CloseModal from "./CloseModal";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// import 'font-awesome/css/font-awesome.min.css';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

function Feedback(props) {
  // const [feedbackModal, setFeedbackModal] = useState(false);
  //
  // const toggleFeedbackModal = () => {
  //     setFeedbackModal(!feedbackModal)
  // }

  //star rating
  let [starRatingValue, setStarRatingValue] = useState(null);

  // const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // const [numRatingValue, setNumRatingValue] = useState(null);
  const [selectedRating, setSelectedRating] = useState(-1);
  const handleRatingSelect = (value) => {
    setSelectedRating(value);
  };

  return props.trigger ? (
    <div className="modalBackground">
      <div className="feedbackModal">
        <div className="overLay"></div>
        <div>
          <div
            className="topLogos"
            // onClick={onclose}
          >
            <img
              src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1587642806364_rsz_lululemon_yogo_rgb_clr-54.jpg"
              alt="logo"
            />

            <button
              style={{ outline: "none" }}
              className="close"
              // onClick={toggleFeedbackModal}
              onClick={() => props.setTrigger(false)}
            >
              <i className="fa fa-times" style={{ fontWeight: 24 }}></i>
            </button>
          </div>

          <div className="topLine">
            {/*<div className='listening' style={{fontWeight: 'bold !important'}}>*/}
            <div>
              {/*We're listening!*/}
              <strong>We're listening!</strong>
            </div>
            <p>We love to sweat the details. Tell us what you think.</p>
            <br />
          </div>

          <div>
            <p>
              Overall, how satisfied are you with your experience?
              {/*todo*/}
              <span className="asterisk">*</span> {/*scss: margin top -10*/}
            </p>
          </div>

          <Box className="starsRating">
            <input
              id="starRadio"
              type="radio"
              name="rating"
              value={starRatingValue}
              onClick={() => (setStarRatingValue = { starRatingValue })}
            />
            <Rating
              name="no-value"
              // value={null}
              className="stars"
            />
          </Box>

          <div className="review-form">
            <p>
              How likely are you to recommend lululemon to a friend or family
              member?
            </p>
            <div className="number-buttons">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <button
                  key={value}
                  className={`number-button ${
                    selectedRating >= value ? "selected" : ""
                  }`}
                  onClick={() => handleRatingSelect(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p>Please tell us about your experience.</p>
            <textarea className="messageBox" type="text" rows="5" />
          </div>

          <div>
            <p>Would you like us to follow up with you?</p>
            <form action="">
              <input type="radio" name="yesOrNo" value="Yes" id="yes" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="yesOrNo" value="No" id="no" />
              <label htmlFor="no">No</label>
            </form>
          </div>

          <div>
            <p>
              We really appreciate your feedback. Have questions or need
              immediate support?
              <a
                href="https://shop.lululemon.com/contact"
                target="_blank"
                rel="noreferrer"
                color="#0071EB"
              >
                {" "}
                Click here{" "}
              </a>
              and contact the Guest Education Center.
            </p>
            <p>
              Your responses will be used in accordance with our
              <a
                href="https://info.lululemon.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
                color="#0071EB"
              >
                {" "}
                privacy policy{" "}
              </a>
            </p>
            <br />
          </div>

          <div className="bottomTwoLines">
            <div className="twoBtns">
              <button
                className="closeBtn"
                /*style={{float:'right'}}/*/
                onClick={() => props.setTrigger(false)}
              >
                Close
              </button>
              {props.children}
              <button className="submitBtn">Submit</button>
            </div>

            <div className="medallia">
              <p>
                <a href="https://www.medallia.com/">
                  Powered by <span>Medallia</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Feedback;
