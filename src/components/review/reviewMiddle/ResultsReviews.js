import {Avatar, Box, Card, CardHeader, FormControl, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ForumIcon from '@mui/icons-material/Forum';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addReview, sortReview} from "../../../actions/reviewAction";

export const ResultsReviews = () => {
    const reviews = useSelector((state) => state?.reviewReducer?.review);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addReview());
    }, []);


    const sortType = useSelector((state) => state?.reviewReducer?.sortType);

    const handleSort = (event) => {
        const sortType = event.target.value;
        dispatch(sortReview(sortType))
    };



    return (
        <>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <Select
                    value={sortType}
                    onChange={handleSort}
                    displayEmpty
                    inputProps={{"aria-label": "Without label"}}
                    style={{marginLeft:"15px", marginRight:'20px'}}
                >
                    <MenuItem value="Most Recent">Most Recent</MenuItem>
                    <MenuItem value="Highest to Lowest Rating">
                        Highest to Lowest Rating
                    </MenuItem>
                    <MenuItem value="Lowest to Highest Rating">
                        Lowest to Highest Rating
                    </MenuItem>
                </Select>
            </FormControl>

            <Box>
                {reviews &&
                    reviews.map((item) => {
                        return (
                            <Card sx={{m: "20px"}} key={item.id}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={{bgcolor: "#57585B", width: 30, height: 30}}
                                            aria-label="recipe"
                                        >
                                            {item.name.charAt(0)}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon/>
                                        </IconButton>
                                    }
                                    subheader={item.name}
                                />

                                <CardContent>
                                    {item.rating}
                                    <Typography
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            marginTop: "5px",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2">{item.des}</Typography>
                                </CardContent>

                                <CardContent  style={{marginTop:'-10px'}}>
                                    <span>{item.UsualSize}</span>
                                    <span style={{marginLeft: "20px"}}>
                    {item.SizePurchased}
                  </span>
                                </CardContent>

                                <CardContent style={{marginTop:'-20px'}}>
                                    <ThumbUpOffAltIcon/>
                                    <ForumIcon style={{marginLeft: "20px"}}/>
                                </CardContent>
                            </Card>
                        );
                    })}
            </Box>
        </>
    );
};
