import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Grid, Hidden} from "@mui/material";
import './detail.scss'

export default function SimpleAccordion() {
    const key =
        "mykey=jYwrtdSw7iO92ambpJ8UsNYXXIFTp2eIImew8gPTqYsNV3TWe7YzuSl4tx%2BarSsa15aOnNN2j8L%2BlsPM2JZ52A==";
    const urlHead = "http://api-lulu.hibitbyte.com/";
    const url = {
        getFilter: `${urlHead}product/filter?${key}`,
        allProduct: `${urlHead}product/allProducts?${key}`,
        productId: "productId",
    };

    const [featurePanels, setFeaturePanels] = useState([]);

    const fetchInfo = () => {
        axios
            .get(url.allProduct)
            .then((res) => {
                const data = res.data.rs;
                const products = data.products;
                const featurePanels = products.map((product) => product.featurePanels);
                setFeaturePanels(featurePanels);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div>
            {featurePanels[0]?.map((item, index) => {
                // console.log(item)
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{display: 'flex', flexDirection: 'row'}}>
                            <img src={item.iconPath} alt="" style={{marginRight: '10px'}}/>
                            <Typography>
                                {item?.title}
                            </Typography>
                        </AccordionSummary>

                        <Hidden mdDown>
                            <Grid container spacing={1}>
                                {item?.content?.map((cardItem, cardIndex) => (
                                    <Grid item xs={3} key={cardIndex} mb={2}>
                                        <Card sx={{minWidth: 175, minHeight: 85, textAlign: 'center',}}>
                                            <Typography m={1} color="text.secondary">
                                                {cardItem}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Hidden>

                        <div className='eachDetail'>
                            <ul>
                                {item?.content?.map((cardItem,cardIndex)=>{
                                    return (<li key={cardIndex}>{cardItem}</li>)
                                })}
                            </ul>
                        </div>
                    </Accordion>
                )
            })}
        </div>
    )
}




