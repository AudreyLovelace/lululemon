import {forwardRef, useState} from "react";
import {makeStyles} from "@mui/styles";
import Modal from '@mui/material/Modal';

import {
    Grid,
    Card,
    Typography,
    Tabs,
    Tab,
    Tooltip,
    Button,
    Container,
    Box,
    Rating,
    Stack,
    TextField, Snackbar, FormControl, InputLabel, Select, MenuItem, useMediaQuery,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';


const useStyle = makeStyles((theme) => ({
    container: {
        width: 900,
        height: 600,
        backgroundColor: "white",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            height: '100vh',
            width: '100vw',
            maxWidth: '100%', maxHeight: '100%'
        },
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',

    },


}))


const AlertMessage = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const WriteReview = () => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)


    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };


    // alert Message show
    const [openAbt, setOpenAbt] = useState(false);

    const handleClick = () => {
        setOpenAbt(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAbt(false);
    };


    // dropDown menu

    const [age, setAge] = useState('');

    const handleChangeBySizeFit = (event) => {
        setAge(event.target.value);
    };


    // media quary ing
    const isSmallScreen = useMediaQuery('(max-width:990px)');


    return (
        <div>
            <Tooltip title="Add"
                     onClick={() => {
                         setOpen(true)
                     }}>
                <Button
                    variant="contained"
                    sx={{color: '#ffffff', bgcolor: '#000000', width: isSmallScreen ? '100%' : 'auto',}}
                    size="large"
                >
                    WRITE A REVIEW
                </Button>
            </Tooltip>
            <Modal open={open} onClose={() => setOpen(false)} style={{overflow: 'auto'}}>
                <Container className={classes.container}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box mt={3}>
                                <img
                                    style={{maxWidth: '100%', height: 'auto', width: isSmallScreen ? '50%' : '100%'}}
                                    src="imgReview.png"
                                    alt="Feedback"
                                />
                            </Box>
                        </Grid>


                        <Grid item
                              xs={10}
                              sm={6}
                              style={{maxWidth: '100%', maxHeight: '100%'}}>
                            <Card>
                                <Typography variant="h5" component="h2" sx={{p: 2}}>
                                    Write a review for
                                    Commission Slim-Fit Pant 32" Wov ...
                                </Typography>
                                <Tabs value={selectedTab} onChange={handleTabChange}>
                                    <Tab label="FeedBack"/>
                                    <Tab label="Size & Fit"/>
                                    <Tab label="Photo"/>
                                    <Tab label="Infor"/>
                                </Tabs>
                                <Box sx={{p: 2}}>
                                    {selectedTab === 0 &&
                                        <Box>
                                            <Typography p={1}>
                                                How would you rate the following?
                                            </Typography>
                                            <Typography p={1}>
                                                Overall Rating*
                                            </Typography>
                                            <Stack spacing={1} p={1}>
                                                <Rating name="size-medium" defaultValue={0}/>
                                            </Stack>
                                            <Typography pl={1} pt={1}>
                                                Review Title *
                                            </Typography>
                                            <TextField fullWidth id="outlined-basic" variant="outlined"/>
                                            <Typography pl={1} pt={1}>
                                                Review * (25-500 characters)
                                            </Typography>
                                            <TextField
                                                id="outlined-multiline-static"
                                                multiline
                                                rows={3}
                                                fullWidth
                                            />
                                        </Box>
                                    }

                                    {selectedTab === 1 &&
                                        <Box>
                                            <Typography p={1}>
                                                Help others find the perfect fit by providing some optional information.
                                            </Typography>
                                            <Typography pl={1} pt={1}>
                                                What's your body type?
                                            </Typography>
                                            <Select
                                                value={age}
                                                onChange={handleChangeBySizeFit}
                                                displayEmpty
                                                inputProps={{'aria-label': 'Without label'}}
                                                fullWidth
                                                pl={1}
                                            >
                                                <MenuItem>Select...</MenuItem>
                                                <MenuItem>Athletic</MenuItem>
                                                <MenuItem>Curvy</MenuItem>
                                            </Select>


                                            <Typography pl={1} pt={1}>
                                                I mainly wear my Lululemon gear to...
                                            </Typography>
                                            <Select
                                                value={age}
                                                onChange={handleChangeBySizeFit}
                                                displayEmpty
                                                inputProps={{'aria-label': 'Without label'}}
                                                fullWidth
                                                pl={1}
                                            >
                                                <MenuItem value={'Select...'}>Select...</MenuItem>
                                                <MenuItem value={'Yogo'}>Yoga</MenuItem>
                                                <MenuItem value={'Dance value='}>Dance</MenuItem>
                                            </Select><Typography pl={1} pt={1}>
                                            What size did you purchase?
                                        </Typography>
                                            <Select
                                                value={age}
                                                onChange={handleChangeBySizeFit}
                                                displayEmpty
                                                inputProps={{'aria-label': 'Without label'}}
                                                fullWidth
                                                pl={1}
                                            >
                                                <MenuItem value={'Select...'}>Select...</MenuItem>
                                                <MenuItem value={'29'}>29</MenuItem>
                                                <MenuItem value={'30'}> 30</MenuItem>
                                            </Select>

                                        </Box>

                                    }


                                    {selectedTab === 2 &&
                                        <Box>
                                            <Typography style={{fontWeight: '600'}} pl={1}>
                                                Add a photo
                                            </Typography>
                                            <Typography style={{fontWeight: '300', fontSize: '14px'}} p={1}>
                                                Upload a PNG, GIF,JPG...
                                            </Typography>


                                        </Box>
                                    }

                                    {selectedTab === 3 &&
                                        <Box>
                                            <Typography style={{fontWeight: '600'}} pl={1}>
                                                Your Info
                                            </Typography>
                                            <Typography pl={1} pt={1}>
                                                Nickname *(Name displayed; 4-25 characters.)
                                            </Typography>
                                            <TextField fullWidth id="outlined-basic" variant="outlined"/>
                                            <Typography pl={1} pt={1}>
                                                Email * (Will not be displayed)
                                            </Typography>
                                            <TextField fullWidth id="outlined-basic" variant="outlined"/>
                                        </Box>
                                    }
                                </Box>


                                <Stack spacing={2} sx={{width: '100%'}}>
                                    <Box style={{display: "flex", flexDirection: "row"}}>
                                        <Button variant="contained" onClick={handleClick} sx={{m: 2, width: "50%"}}>
                                            Submit
                                        </Button>
                                        <Button variant="contained" onClick={() => setOpen(false)}
                                                sx={{m: 2, width: "50%"}}>
                                            Back
                                        </Button>
                                        <Snackbar open={openAbt} autoHideDuration={6000} onClose={()=>{setOpenAbt(false)}}>
                                            <AlertMessage onClose={handleClose} severity="success" sx={{width: '100%'}}>
                                                This is a success message!
                                            </AlertMessage>
                                        </Snackbar>
                                    </Box>
                                </Stack>

                            </Card>
                        </Grid>
                    </Grid>

                </Container>
            </Modal>


        </div>


    )
}

