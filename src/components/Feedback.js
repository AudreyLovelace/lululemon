import './feedback.scss';
import React, {useState} from "react";
/*import StarIcon from '@mui/icons-material/Star'*/

const Feedback = () => {
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (

        <div>
            <img
                src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1587642806364_rsz_lululemon_yogo_rgb_clr-54.jpg"
                alt="logo"/>

            <div>
                close x
            </div>
            <div>
                <h4>We're listening!</h4>
                <p>We love to sweat the details. Tell us what you think.</p>
                <br/>
                <br/>
            </div>

            <div>
                <p>Overall, how satisfied are you with your experience?
                    //todo
                    <span>*</span> //scss: margin top -10
                </p>

            </div>
            <div>
                {[...Array(5)].map((star) => {
                    return (
                        <span className="star">&#9733;</span>
                    );
                })}
                <br/>
                <br/>
            </div>

            <div>
                <p>How likely are you to recommend lululemon to a friend or family member?</p>
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
                <br/>
            </div>

        </div>
    )
}


export default Feedback
