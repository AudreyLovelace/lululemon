import "./boxes.scss"
import {Link} from "react-router-dom";
import {useState} from "react";

const AboutUs = () => {


    return (
        <div className="box">
            <Link to="/" className="box_title" type='button' >
                ABOUT US
            </Link>


            <div className="box_detail">
                <Link to="/" className="box_detail_text" type="button">Our Business</Link>
                <Link to="/" className="box_detail_text" type="button">Media</Link>
                <Link to="/" className="box_detail_text" type="button">Investors</Link>
                <Link to="/" className="box_detail_text" type="button">Strategic Sales</Link>
                <Link to="/" className="box_detail_text" type="button">Affiliates and Creators</Link>
                <Link to="/" className="box_detail_text" type="button">Sweat Collective</Link>
                <Link to="/" className="box_detail_text" type="button">Team Canada</Link>
            </div>
        </div>
    )
}

export default AboutUs