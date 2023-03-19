import './feedback.scss';
import React, {useState} from "react";
import {red} from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';
import CloseModal from "./CloseModal";

const Feedback = (onClose) => {
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const star = [StarIcon, StarIcon, StarIcon, StarIcon, StarIcon]

    // function setOpenModal(b) {
    //     // eslint-disable-next-line react-hooks/rules-of-hooks
    //     let setOpenModal;
    //     [setOpenModal] = useState(false);
    // }

    return (

        <div className='feedback'>
            <img
                src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1587642806364_rsz_lululemon_yogo_rgb_clr-54.jpg"
                alt="logo"/>

            <CloseModal/>
            {/*<div className='modalRight'>*/}
            {/*    /!*<button onClick={()=>setOpenModal(true)}>Modal</button>*!/*/}
            {/*   <p onClick={onclose} className='xBtn'>X</p>*/}
            {/*</div>*/}
            <div>
                <div className='bold'>
                    <p>We're listening!</p>
                </div>
                <p>
                    We love to sweat the details. Tell us what you think.
                </p>
            </div>

            <div>
                <p>Overall, how satisfied are you with your experience?
                    {/*todo*/}
                    <span className="asterisk">*</span> {/*scss: margin top -10*/}
                </p>
            </div>
            <div>
                {star.map((star) => {
                    return (
                        // <starIcon/>
                        <span className="star">&#9733;</span>
                    );
                })}
                <p> This Field is Required.</p>
            </div>

            <div>
                <p>How likely are you to recommend lululemon to a friend or family member?</p>
            </div>

            <div className='numbers'>
                {number.map((numbers) => {
                    return (
                        <div>
                            <button>{numbers}</button>
                        </div>
                    );
                })}
                <br/>
            </div>

            <div>
                <p>Please tell us about your experience.</p>
                <input className='messageBox' type="text"/>
            </div>

            <div>
                <p>Would you like us to follow up with you?</p>
                <input type="radio" value='Yes' name='Yes'/> Yes
                <input type="radio" value='No' name='No'/> No
            </div>

            <div>
                <p>We really appreciate your feedback. Have questions or need immediate support?
                    <a href="https://shop.lululemon.com/contact" target='_blank' rel="noreferrer" color='#0071EB'> Click here </a>
                     and contact the Guest Education Center.
                </p>
                <p>Your responses will be used in accordance with our
                    <a href="https://info.lululemon.com/legal/privacy-policy" target='_blank' rel="noreferrer" color='#0071EB'> privacy policy </a>
                </p>
            </div>

            <div>
                <button className='closeBtn'>Close</button>
                <button className='submitBtn'>Submit</button>
            </div>

            <div className='medallia'>
                <h6>Powered by Medallia</h6>
            </div>
        </div>
    )
}


export default Feedback
