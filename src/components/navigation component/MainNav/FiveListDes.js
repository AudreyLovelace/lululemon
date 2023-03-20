import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './fiveListDes.scss';
import {Popover, Typography} from "@mui/material";
import {HoverItem} from "./HoverItem";

function FiveListDes() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (<>
            <nav className='fiveLogo'>

                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="fiveLogo_mainBtn"
                > WOMEN
                </div>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handleMouseLeave}
                    disableRestoreFocus>
                    <Typography>
                        <HoverItem/>
                    </Typography>
                </Popover>


                <div className='fiveLogo_mainBtn'
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    MEN
                </div>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handleMouseLeave}
                    disableRestoreFocus>
                    <Typography>
                        <HoverItem/>
                    </Typography>
                </Popover>


                <div className='fiveLogo_mainBtn'
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >
                    ACCESSORIES
                </div>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handleMouseLeave}
                    disableRestoreFocus>
                    <Typography>
                        <HoverItem/>
                    </Typography>
                </Popover>


            </nav>


            <Link to='/' type='button' className='fiveLogo_mainBtn'>
                SHOES
            </Link>
            <Link to='/' type='button' className='fiveLogo_mainBtn'>
                STUDIO
            </Link>
        </>
    )
        ;
}

export default FiveListDes;

