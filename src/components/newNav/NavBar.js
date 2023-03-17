import {AppBar, InputBase, styled, Toolbar, Typography} from "@mui/material";
import React from 'react'
import LuluLogo from "../navigation component/TopNav/LuluLogo";
import InputValue from "./InputValue";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const StyledToolbar = styled(Toolbar)(({theme}) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));


const Search = styled('div')(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    width: "200px",
    height: "35px",
    textAlign: 'center',
    lineHeight: '35px',
}))

const Icon = styled('div')(({theme}) => ({
    fontSize: "medium"
}))


export const NaviBar = () => {
    return (
        <AppBar>
            <StyledToolbar>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{flexGrow: 1, alignSelf: 'flex-end'}}
                    color="black">
                    <LuluLogo/>
                </Typography>

                <Typography
                    display="flex"
                    flex-direction='row'
                    variant="h5"
                    component="div"
                    sx={{flexGrow: 1, alignSelf: 'flex-end', display: {xs: "none", md: "block"}}}
                    color="black" fontSize=" 16px" ={1}>
                    <Typography>WOMEN</Typography>
                    MEN
                    ACCESSORIES
                    SHOES
                    STUDIO
                </Typography>

                <Typography
                    variant="h5"
                    component="div"
                    sx={{flexGrow: 1, alignSelf: 'flex-end'}}
                    m={1}>
                    <Search><InputBase placeholder='Search...'/> </Search>
                </Typography>


            </StyledToolbar>
        </AppBar>
    )
}
