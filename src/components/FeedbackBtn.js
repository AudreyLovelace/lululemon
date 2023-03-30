import React, {useState} from 'react';
// import './feedbackBtn.scss';
import Feedback from "./Feedback";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function FeedbackBtn() {
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <div>
            {/*<Button onClick={handleOpen} id="popup" className="feedbackBtn">*/}
                <Button onClick={() => setOpen(true)}
                        id="popup" className="feedbackBtn">
                <img
                    src="https://resources.digital-cloud.medallia.com/wdcus/55284/resources/image/1606143979979_Feedback-Updated.jpg"
                    alt="Feedback"/>
            </Button>

            <Feedback trigger={open} setTrigger={setOpen}/>

            {/*<Modal*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    aria-labelledby="modal-modal-title"*/}
            {/*    aria-describedby="modal-modal-description"*/}
            {/*>*/}
            {/*   <Box>*/}
            {/*        <Typography id="modal-modal-title" variant="h6" component="h2">*/}
            {/*            Text in a modal*/}
            {/*        </Typography>*/}
            {/*    </Box>*/}
            {/*</Modal>*/}
            {/*<FeedbackBtn open={openFeedback} onClose={()=>setOpenFeedback(false)}/>*/}
        </div>
    )
}


// export default feedbackBtn;