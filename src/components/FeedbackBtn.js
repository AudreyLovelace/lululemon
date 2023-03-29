import React, {useState} from 'react';
import './feedbackBtn.scss';
import Feedback from "./Feedback";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function FeedbackBtn() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [openFeedback, setOpenFeedback] = useState(false)
    return (
        <div>
            {/*<button id="popup" className="feedbackBtn"*/}
            {/*        onClick="toggle_visibility()"*/}
            {/*    onClick={() => setOpenFeedback(true)}*/}
            {/*>*/}
            {/*    <img src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1606143979979_Feedback-Updated.jpg"*/}
            {/*         alt="Feedback"/>*/}
            {/*</button>*/}

            <Button onClick={handleOpen} id="popup" className="feedbackBtn">
                <img
                    src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1606143979979_Feedback-Updated.jpg"
                    alt="Feedback"/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    {/*<Typography id="modal-modal-title" variant="h6" component="h2">*/}
                    {/*    Text in a modal*/}
                    {/*</Typography>*/}
                </Box>
            </Modal>
            {/*<FeedbackBtn open={openFeedback} onClose={()=>setOpenFeedback(false)}/>*/}
        </div>
    )
}


// export default feedbackBtn;