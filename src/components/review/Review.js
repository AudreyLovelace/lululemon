import {TopReview} from "./reviewTopLine/TopReview";
import './review.scss'
import {ResultsReviews} from "./reviewMiddle/ResultsReviews";
import ReviewFilter from "./reviewMiddle/FilterReviews";
import {Grid} from "@mui/material";

const Review = () => {
    return (
        <div className='review'>
            <Grid>
                <Grid item xs={6} md={12} mb={3} mt={3}>
                    <TopReview/>
                </Grid>
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        flexDirection: ['column', null, 'row'], // 小于 md 时为 column，否则为 row
                        justifyContent: 'space-between',
                    }}
                >
                    <Grid item xs={6} md={4}>
                        <ReviewFilter/>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <ResultsReviews/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Review;
