import './feedback.scss';
import React, {useState} from "react";
import {red} from "@mui/material/colors";
// import StarIcon from '@mui/icons-material/Star'

const Feedback = () => {
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (

        <div className='feedback'>
            <img
                src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1587642806364_rsz_lululemon_yogo_rgb_clr-54.jpg"
                alt="logo"/>

            <div className='close'>
                close x
            </div>
            <div>
                <h5>We're listening!</h5>
                <h6>We love to sweat the details. Tell us what you think.</h6>
                <br/>
            </div>

            <div>
                <h6>Overall, how satisfied are you with your experience?
                    {/*todo*/}
                    <span className="asterisk">*</span> {/*scss: margin top -10*/}
                </h6>

            </div>
            <div>
                {[...Array(5)].map((star) => {
                    return (
                        <span className="star">&#9733;</span>
                    );
                })}
                <br/>
            </div>

            <div>
                <h6>How likely are you to recommend lululemon to a friend or family member?</h6>
            </div>

            <div>
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
                <h6>Please tell us about your experience.</h6>
                <input type="text"/>
            </div>

            <div>
                <h6>Would you like us to follow up with you?</h6>
                <input type="radio" value='Yes' name='Yes'/> Yes
                <input type="radio" value='No' name='No'/> No
            </div>

            <div>
                <h6>We really appreciate your feedback. Have questions or need immediate support? Click here and contact the Guest Education Center.
                </h6>
                <br/>
                <h6>Your responses will be used in accordance with our privacy policy</h6>
            </div>

            <div>
                <button>Close</button>
                <button>Submit</button>
            </div>

            <div>
                <h6>Powered by Medallia</h6>
            </div>
        </div>
    )
}


export default Feedback
