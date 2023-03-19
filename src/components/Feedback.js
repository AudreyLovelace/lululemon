import './feedback.scss';
import React, {useState} from "react";
// import {red} from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';
import CloseModal from "./CloseModal";

const Feedback = (onClose) => {
    const star = [StarIcon, StarIcon, StarIcon, StarIcon, StarIcon]
    const number = [' 0', ' 1', ' 2 ', ' 3 ', ' 4 ', ' 5 ', ' 6 ', ' 7 ', ' 8 ', ' 9 ', ' 10 ']

    // function setOpenModal(b) {
    //     // eslint-disable-next-line react-hooks/rules-of-hooks
    //     let setOpenModal;
    //     [setOpenModal] = useState(false);
    // }

    return (

        <div className='feedback'>
            <div className='topLogos'>
                <img
                    src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1587642806364_rsz_lululemon_yogo_rgb_clr-54.jpg"
                    alt="logo"/>

                <CloseModal/>
                {/*<div className='modalRight'>*/}
                {/*    /!*<button onClick={()=>setOpenModal(true)}>Modal</button>*!/*/}
                {/*   <p onClick={onclose} className='xBtn'>X</p>*/}
                {/*</div>*/}
            </div>
            <div className='topLine'>
                {/*<div className='listening' style={{fontWeight: 'bold !important'}}>*/}
                <div>
                    {/*We're listening!*/}
                    <strong>We're listening!</strong>
                </div>
                <p>
                    We love to sweat the details. Tell us what you think.
                </p>
                <br/>
            </div>

            <div>
                <p color='red'>Overall, how satisfied are you with your experience?
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
                <br/>
                <p>How likely are you to recommend lululemon to a friend or family member?</p>
            </div>

            <div className='numbers'>
                {number.map((numbers) => {
                    return (
                        <div>
                            <button className='numbersBtn'>{numbers}</button>
                        </div>
                    );
                })}
                <br/>
            </div>

            <div>
                <br/>
                <p>Please tell us about your experience.</p>
                <input className='messageBox' type="text"/>
            </div>

            <div>
                <br/>
                <p>Would you like us to follow up with you?</p>
                <input type="radio" value='Yes' name='Yes'/> Yes
                <input type="radio" value='No' name='No'/> No
            </div>

            <div>
                <br/>
                <p>We really appreciate your feedback. Have questions or need immediate support?
                    <a href="https://shop.lululemon.com/contact" target='_blank' rel="noreferrer" color='#0071EB'> Click
                        here </a>
                    and contact the Guest Education Center.
                </p>
                <p>Your responses will be used in accordance with our
                    <a href="https://info.lululemon.com/legal/privacy-policy" target='_blank' rel="noreferrer"
                       color='#0071EB'> privacy policy </a>
                </p>
                <br/>
            </div>

            <div className='bottomTwoLines'>
                <div className='twoBtns'>
                    <button className='closeBtn'
                        /*style={{float:'right'}}/*/
                    >Close
                    </button>
                    <button className='submitBtn'>Submit</button>
                </div>

                <div className='medallia'>
                    <p>
                        <a href="https://www.medallia.com/">Powered by Medallia</a>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Feedback
