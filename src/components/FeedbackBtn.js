import React, {useState} from 'react';
import './feedbackBtn.scss';
import Feedback from "./Feedback";
import FeedbackBtn from "./FeedbackBtn";

function feedbackBtn() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openFeedback, setOpenFeedback] = useState(false)

    return (
        <div>
            <button id="popup" className="feedbackBtn"
                    // onClick="toggle_visibility()"
                onClick={() => setOpenFeedback(true)}
            >
                <img src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1606143979979_Feedback-Updated.jpg"
                     alt="Feedback"/>
            </button>
            <FeedbackBtn open={openFeedback} onClose={()=>setOpenFeedback(false)}/>
        </div>
    )
}

export default feedbackBtn