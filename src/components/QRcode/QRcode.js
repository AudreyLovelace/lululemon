import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import {useState} from "react";
import Modal from "@mui/material/Modal";
import {Box, Button, Typography} from "@mui/material";
import QrCode from 'qrcode.react';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import {TwitterShareButton, FacebookShareButton, PinterestShareButton, WhatsappShareButton} from 'react-share';
import {TwitterIcon, FacebookIcon, PinterestIcon, WhatsappIcon} from 'react-share';

export const QRCode = (props) => {
    const {urlFromProductPage, oneFromProductPage} = props


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        maxheight: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button sx={{borderRadio: '50%'}} onClick={handleOpen}><ShareOutlinedIcon/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h1" pb={2}>
                        Title: {oneFromProductPage?.name}
                    </Typography>
                    <QrCode value={urlFromProductPage} size={120} style={{textAlign: 'center'}}/>
                    <div style={{
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        padding: '15px 0 ',
                    }}>
                        <AddLinkOutlinedIcon/>
                        <p style={{paddingLeft: '10px'}}>{urlFromProductPage}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row',}}>
                        <TwitterShareButton  url={urlFromProductPage}>
                            <TwitterIcon style={{marginRight:"15px"}} size={32} round/>
                        </TwitterShareButton>
                        <FacebookShareButton  url={urlFromProductPage}>
                            <FacebookIcon style={{marginRight:"15px"}} size={32} round/>
                        </FacebookShareButton>
                        <PinterestShareButton  url={urlFromProductPage}>
                            <PinterestIcon style={{marginRight:"15px"}} size={32} round/>
                        </PinterestShareButton>
                        <WhatsappShareButton  url={urlFromProductPage}>
                            <WhatsappIcon style={{marginRight:"15px"}} size={32} round/>
                        </WhatsappShareButton>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}