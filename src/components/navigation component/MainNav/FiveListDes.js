import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './fiveListDes.scss';
import {DropDown} from "../DropDown/DropDown";

function FiveListDes() {

    // const [onButton, setOnButton] = useState(null)
    //
    // const handleEnter = () => {
    //     setOnButton(true)
    // }
    //
    // const handleClose = () => {
    //     setOnButton(false)
    // }


    return (<>
            <nav className='fiveLogo'>
                <div className='fiveLogo_dropDown'>
                    <div className="fiveLogo_dropDown_mainBtn"> WOMEN</div>

                    <div
                        // style={{display: onButton ? 'block' : 'none'}}
                        // onMouseEnter={handleEnter}
                        // onclose={handleClose}
                        className="fiveLogo_dropDown_page">
                        <DropDown/>
                    </div>
                </div>

                <div className='fiveLogo_dropDown'>
                    <div className="fiveLogo_dropDown_mainBtn"> MEN</div>
                    <div className="fiveLogo_dropDown_page">
                        <DropDown/>
                    </div>
                </div>


                <div className='fiveLogo_dropDown'>
                    <div className="fiveLogo_dropDown_mainBtn"> ACCESSORIES</div>
                    <div className="fiveLogo_dropDown_page">
                        <DropDown/>
                    </div>
                </div>


            </nav>


            <Link to='/' type='button' className='fiveLogo_dropDown_mainBtn'>
                SHOES
            </Link>
            <Link to='/' type='button' className='fiveLogo_dropDown_mainBtn'>
                STUDIO
            </Link>
        </>
    )
        ;
}

export default FiveListDes;

