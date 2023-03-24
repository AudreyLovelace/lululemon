import {alpha, Box, Card, CardContent, Checkbox, Hidden, InputBase} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Search} from "@mui/icons-material";
import {styled} from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {checkFilter} from "../../../actions/reviewAction";

const ReviewFilter = () => {


    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        border: '1px solid black',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // 添加盒子阴影

        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.3)',

        },
        transition: 'box-shadow 0.3s', // 添加过渡效果

        marginLeft: 0,
        maxWidth: '100%',
        marginTop: '10px',

        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    //checkbox
    const label = {inputProps: {'aria-label': 'Checkbox demo'}};


    const filter = useSelector((state) => state?.reviewReducer?.filter);


    const dispatch = useDispatch()

    const handleFilterChange = (id) => {
        if (id !== filter) {
            dispatch(checkFilter(id))
        } else {
            dispatch(checkFilter(null))
        }
    };


    return (
        <>
            <Box>
                <Typography variant="h5" component="h5" pl={1}>
                    Filter Review
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>


                <Hidden mdDown>
                    <Card sx={{minWidth: 275, marginTop: '20px'}}>
                        <CardContent>
                            <Typography sx={{fontSize: 18}}>
                                Rating
                            </Typography>

                            <Typography
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <label>
                                    <Checkbox {...label}
                                              onClick={() => {
                                                  handleFilterChange(5)
                                              }}
                                              color="default"
                                              name={'star'}/>
                                </label>
                                <span style={{paddingLeft: "4px", paddingRight: "6px"}}>
                                                    5 Star
                                                </span>
                                <span style={{marginLeft: "10px"}}>1</span>
                            </Typography>

                            <Typography
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <label>
                                    <Checkbox {...label}
                                              onClick={() => {
                                                  handleFilterChange(4)
                                              }}
                                              color="default"
                                              name={'star'}/>
                                </label>
                                <span style={{paddingLeft: "4px", paddingRight: "6px"}}>
                                                    4 Star
                                                </span>
                                <span style={{marginLeft: "10px"}}>1</span>
                            </Typography>
                            <Typography
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <label>
                                    <Checkbox {...label}
                                              onClick={() => {
                                                  handleFilterChange(3)
                                              }}
                                              color="default"
                                              name={'star'}/>
                                </label>
                                <span style={{paddingLeft: "4px", paddingRight: "6px"}}>
                                                    3 Star
                                                </span>
                                <span style={{marginLeft: "10px"}}>1</span>
                            </Typography>
                            <Typography
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <label>
                                    <Checkbox {...label}
                                              onClick={() => {
                                                  handleFilterChange(2)
                                              }}
                                              color="default"
                                              name={'star'}/>
                                </label>
                                <span style={{paddingLeft: "4px", paddingRight: "6px"}}>
                                                    2 Star
                                                </span>
                                <span style={{marginLeft: "10px"}}>1</span>
                            </Typography>
                            <Typography
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                <label>
                                    <Checkbox {...label}
                                              onClick={() => {
                                                  handleFilterChange(1)
                                              }}
                                              color="default"
                                              name={'star'}/>
                                </label>
                                <span style={{paddingLeft: "4px", paddingRight: "6px"}}>
                                                    1 Star
                                                </span>
                                <span style={{marginLeft: "10px"}}>1</span>
                            </Typography>


                            <Box sx={{borderTop: 1, borderColor: 'grey.500'}}/>


                            <Typography sx={{fontSize: 18, marginTop: '20px'}}>
                                Photos
                            </Typography>
                            <Typography style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: '10px'
                            }}>
                                <Checkbox {...label} color="default"/>
                                <span style={{
                                    paddingLeft: '4px',
                                    paddingRight: '6px'
                                }}>Only show posts with images</span>
                            </Typography>

                        </CardContent>
                    </Card>
                </Hidden>
            </Box>
        </>
    )
}


export default ReviewFilter