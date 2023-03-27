import "./topReview.scss";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import {
  ABitLargeSize,
  ABitSmallSize,
  LargerSize,
  SmallSize,
  TrueToSize,
} from "./Size";
import { WriteReview } from "./WriteReview";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Grid } from "@mui/material";

export const TopReview = () => {
  return (
    // <div className='topLineReview'>
    <div className="container">
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"], // 小于 md 时为 column，否则为 row
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} md={4}>
          <div className="topLineReview_text">Reviews</div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div style={{ display: "flex" }}>
            <div className="topLineReview_rating">
              <div className="topLineReview_rating_first">
                <div className="topLineReview_rating_first_text">3.5</div>
                <div className="topLineReview_rating_first_star">
                  <span>
                    <StarOutlinedIcon />
                  </span>
                  <span>
                    <StarOutlinedIcon />
                  </span>
                  <span>
                    <StarOutlinedIcon />
                  </span>
                  <span>
                    <StarHalfOutlinedIcon />
                  </span>
                  <span>
                    <StarOutlineIcon />
                  </span>
                </div>
              </div>
              <div className="topLineReview_rating_second">
                Based on 41 Reviews
              </div>
            </div>

            <div className="topLineReview_size">
              <div className="topLineReview_size_text">Fits true to size</div>
              <div className="topLineReview_size_sizeRating">
                <div className="topLineReview_size_sizeRating_text">
                  Smaller
                </div>
                <div className="topLineReview_size_sizeRating_lineForSize">
                  <SmallSize />
                  <ABitSmallSize />
                  <TrueToSize />
                  <ABitLargeSize />
                  <LargerSize />
                </div>
                <div className="topLineReview_size_sizeRating_text">Larger</div>
              </div>
            </div>

            <WriteReview />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
