import {GiftCard, Global, SignIn, StoreLocation, WishList} from "./TopIcon";
import "./AllDes.scss"
import {Link, useNavigate} from "react-router-dom";
import {BagLogo, GiftCard1, LuluLogo, SignIn1, StoreLocation1, WishList1} from "./NewLogo";
import {Menu, MenuItem} from "@mui/material";
import {useEffect, useState} from "react";


const AllDes = (props) => {
    const {dataFromTopNavigation} = props
    const [isLogin, setLogin] = useState(false)

    const handleMyAcc = e => (
        setLogin(dataFromTopNavigation)
    );
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const Navigate = useNavigate()

    useEffect((evt) => {
        handleMyAcc(evt)
    }, [])


    return (
        <div className='allLine'>
            <div className="topLine">
                <div className="topLine_details">
                    <StoreLocation/>
                    <span className="topLine_details_names">Store Location</span>
                </div>
                {isLogin ?
                    (<div>
                        <div className="topLine_details" onClick={handleClick}>
                            <SignIn/>
                            <p className="topLine_details_names">My Account</p>
                        </div>
                    </div>) :
                    (
                        <div onClick={handleMyAcc}>
                            <div className="topLine_details" onClick={handleClick}>
                                <SignIn/>
                                <p className="topLine_details_names">Sign In</p>
                            </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                                <MenuItem onClick={() => {
                                    Navigate("/login")
                                }}>
                                    Log In
                                </MenuItem>
                            </Menu>
                        </div>)
                }


                <div className="topLine_details">
                    <WishList/>
                    <span className="topLine_details_names">Wish List</span>
                </div>

                <div className="topLine_details">
                    <GiftCard/>
                    <span className="topLine_details_names">Gift Card</span>
                </div>

                <div className="topLine_details">
                    <Global/>
                    <span className="topLine_details_names">Can</span>
                </div>
            </div>


            <div className='resDesLogo'>
                <div>
                    <Link to="./">
                        <LuluLogo/>
                    </Link>
                </div>
                <div className='resDesLogo_fiveLoge'>
                    <div className='resDesLogo_fiveLoge_each' onClick={handleClick}>
                        <SignIn1/>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                        <MenuItem onClick={() => {
                            Navigate("/login")
                        }
                        }>
                            Log In</MenuItem>
                    </Menu>


                    <div className='resDesLogo_fiveLoge_each'>
                        <StoreLocation1/>
                    </div>
                    <div className='resDesLogo_fiveLoge_each'>
                        <WishList1/>
                    </div>
                    <div className='resDesLogo_fiveLoge_each'>
                        <GiftCard1/>
                    </div>
                    <div className='resDesLogo_fiveLoge_each'>
                        <BagLogo/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AllDes
