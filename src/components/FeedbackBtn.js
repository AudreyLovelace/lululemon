import './feedbackBtn.scss';

const feedbackBtn = () => {
    return (
        <div>
            {/*<button className='feedbackBtn'>*/}
            {/*    <img src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1606143979979_Feedback-Updated.jpg" alt=""/>*/}
            {/*</button>*/}

            <button id="popup" className="feedback-button"
                    onClick="toggle_visibility()">
                {/*Feedback*/}
                <img src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1606143979979_Feedback-Updated.jpg"
                     alt="Feedback"/>
            </button>

        </div>
    )
}

export default feedbackBtn