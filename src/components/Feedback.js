import './feedback.scss';
import React, {useState} from "react";
import StarIcon from '@mui/icons-material/Star';

const Feedback = () => {
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
                <p>Overall, how satisfied are you with your experience?</p>
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
                {[...Array(11)].map((numbers) => {
                    return (
                        <button>0</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>10</button>
                );
                })}
                <br/>
                <br/>
            </div>

        </div>
    )
}


export default Feedback
