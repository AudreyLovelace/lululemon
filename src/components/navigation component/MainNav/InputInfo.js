import "./inputInfor.scss";
import {useEffect, useState} from "react";
import {Close, Search} from "./Icon";
import {filterActions} from "../../../actions/filterAction";
import {useSelector, useDispatch} from "react-redux";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export const InputInfo = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const showCloseIcon = message.length > 0;
    //get all products
    const products = useSelector((state) => state?.lululemonReducer);

    useEffect(() => {
        if (message) {
            //filter products which name contains message
            const keyWord = message;
            setMessage("");
        }
    }, [products]);
    const cbInput = (evt) => {
        let newMessage = evt.target.value.trim().toLowerCase();
        if (evt.key === "Enter") {
            if (newMessage !== message) {
                setMessage(newMessage);
            }
        }
    };


    // popover
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div className="searchBar">
            <form
                className="search_form"
                onSubmit={(e) => {
                    console.log(e.target);
                    e.preventDefault();
                    e.target[0].value = null;
                    //clear filter
                    filterActions.initPage(dispatch);
                }}
            >
                <Search/>
                <input
                    type="text"
                    placeholder="Search"
                    className="search_input"
                    value={message}
                    onKeyDown={cbInput}
                    onChange={(evt) => setMessage(evt.target.value)}
                    onClick={handleClick}
                />

                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{p: 2}} style={{width: anchorEl?.clientWidth}}>TRENDING SEARCHES</Typography>
                    <Typography sx={{p: 2}} style={{width: anchorEl?.clientWidth, cursor: 'pointer'}}>scuba</Typography>
                    <Typography sx={{p: 2}} style={{cursor: 'pointer'}}>belt bag</Typography>
                    <Typography sx={{p: 2}} style={{cursor: 'pointer'}}>align</Typography>
                    <Typography sx={{p: 2}} style={{cursor: 'pointer'}}>bag</Typography>
                    <Typography sx={{p: 2}} style={{cursor: 'pointer'}}>define</Typography>
                </Popover>


                {showCloseIcon && <Close/>}
                {/*todo onclick with fetch data*/}
            </form>
        </div>
    );
};
