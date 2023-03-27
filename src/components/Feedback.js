import './feedback.scss';
import './feedbackBtn.scss'
import React, {useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import CloseModal from "./CloseModal";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Feedback = ({open, onClose}) => {
    // if (!open) return null;  ????

    const [value, setValue] = React.useState(2);

    let [starRatingValue, setStarRatingValue] = useState(null);
    // const star = [0, 1, 2, 3, 4]


    // const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const [numRatingValue, setNumRatingValue] = useState(null);
    const [selectedRating, setSelectedRating] = useState(0);
    const handleRatingSelect = (value) => {setSelectedRating(value)};

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

                {/*<div>*/}
                {/*    <button style={{outline: 'none'}}*/}
                {/*        className='close'>*/}
                {/*        /!*<i className="fa fa-times"></i>*!/*/}
                {/*        <p onClick={onclose} className='fa fa-times xBtn'*/}
                {/*           style={{ fontWeight: 24}}>X</p>*/}
                {/*    </button>*/}

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
                <p>Overall, how satisfied are you with your experience?
                    {/*todo*/}
                    <span className="asterisk">*</span> {/*scss: margin top -10*/}
                </p>
            </div>

            <Box className='starsRating'>
                <input id='starRadio' type="radio" name='rating'
                       value={starRatingValue}
                       onClick={() => setStarRatingValue = {starRatingValue}}
                />
                <Rating name="no-value"
                    // value={null}
                        className='stars'/>
            </Box>

            {/*<div>*/}
            {/*    {star.map((star) => {*/}
            {/*        return (*/}
            {/*            // <starIcon/>*/}
            {/*            <span className="star">&#9733;</span>*/}

            {/*        );*/}
            {/*    })}*/}
            {/*    /!*<p> This Field is Required.</p>*!/*/}
            {/*</div>*/}


            {/*NumbersRating-Version-1: Numbers in a row; but click no reqction*/}
            {/*<div className='numbers'>*/}
            {/*    <input id='numRadio' type="radio" name='numbers'*/}
            {/*           value={numRatingValue}*/}
            {/*           onClick={() => setNumRatingValue = {numRatingValue}}*/}
            {/*    />*/}
            {/*    {number.map((numbers) => {*/}
            {/*        return (*/}
            {/*            <div>*/}

            {/*                <button className='numbersBtn'>{numbers}</button>*/}
            {/*            </div>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</div>*/}

            {/*NumberRating-Version-2*/}
            {/*<div className='recommendation'>*/}
            {/*    <p>How likely are you to recommend lululemon to a friend or family member?</p>*/}
            {/*    <div className='numbers' style={{display: 'flex'}}>*/}
            {/*        {number.map((numbers, i) => {*/}
            {/*            return (*/}
            {/*                <div id={i} onClick={(event) => {*/}
            {/*                    for (let i = 0; i < numbers.length; i++) {*/}
            {/*                        document.getElementById(i).classList.remove('choose')*/}
            {/*                    }*/}
            {/*                    document.getElementById(i).classList.add('choose')*/}
            {/*                }}>*/}
            {/*                    /!*<label htmlFor="numRadio"></label>*!/*/}
            {/*                    /!*<input id='numRadio' type="radio" name='numbers'*!/*/}
            {/*                    /!*       value={numRatingValue}*!/*/}
            {/*                    /!*       onClick={() => setNumRatingValue = {numRatingValue}}*!/*/}
            {/*/>*/}
            {/*                    </button>*/}
            {/*                </div>)*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*NumberRating-Version-ChatGPT*/}
            <div className="review-form">
                <p>How likely are you to recommend lululemon to a friend or family member?</p>
                <div className="number-buttons">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <button
                            key={value}
                            className={`number-button ${selectedRating === value ? 'selected' : ''}`}
                            onClick={() => handleRatingSelect(value)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>


            <div>
                {/*<br/>*/}
                <p>Please tell us about your experience.</p>
                <textarea className='messageBox' type="text" rows="5"/>
            </div>

            <div>
                {/*<br/>*/}
                <p>Would you like us to follow up with you?</p>
                <form action="">
                    <input type="radio" name="yesOrNo" value='Yes' id="yes"/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" name="yesOrNo" value='No' id='no'/>
                    <label htmlFor="no">No</label>
                </form>
            </div>

            <div>
                {/*<br/>*/}
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
                        <a href="https://www.medallia.com/">Powered by <span>Medallia</span></a>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Feedback

