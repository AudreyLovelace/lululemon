import "./boxes.scss"
import {Link} from "react-router-dom";

const ContactUs = () => {

    return (
        <div className="box">
            <Link to="/" className="box_title" type='button'>
                Contact Us
            </Link>


            <div className="box_detail">
                <Link to="/" className="box_detail_text" type="button">FAQ</Link>
                <Link to="/" className="box_detail_text" type="button">Services</Link>
                <Link to="/" className="box_detail_text" type="button">Ordering</Link>
                <Link to="/" className="box_detail_text" type="button">Shipping Policy</Link>
                <Link to="/" className="box_detail_text" type="button">Returns</Link>
                <Link to="/" className="box_detail_text" type="button">Redeem Gift Cards</Link>
                <Link to="/" className="box_detail_text" type="button">Sizing</Link>
                <Link to="/" className="box_detail_text" type="button">Our Products</Link>
            </div>
        </div>
    )
}

export default ContactUs