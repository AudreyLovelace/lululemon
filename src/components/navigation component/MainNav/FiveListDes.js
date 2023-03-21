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


    const meunList = [
        {id: 0, label: 'WOMEN'},
        {id: 1, label: "MEN"},
        {id: 2, label: "ACCESSORIES"}]


    return (<>
            <nav className='fiveLogo'>
                <div className='fiveLogo_dropDown'>
                    <div className="fiveLogo_dropDown_menuList">{
                        meunList.map((item)=>{
                            return (
                                <div key={item.id} className="fiveLogo_dropDown_menuList_mainBtn">
                                    {item.label}
                                </div>
                            )
                        })
                    }</div>

                    <div
                        // style={{display: onButton ? 'block' : 'none'}}
                        // onMouseEnter={handleEnter}
                        // onclose={handleClose}
                        className="fiveLogo_dropDown_page">
                        <DropDown/>
                    </div>
                </div>





            </nav>


            <Link to='/' type='button' className='fiveLogo_dropDown_menuList_mainBtn'>
                SHOES
            </Link>
            <Link to='/' type='button' className='fiveLogo_dropDown_menuList_mainBtn'>
                STUDIO
            </Link>
        </>
    )
        ;
}

export default FiveListDes;

