import "./boxes.scss"
import {Link} from "react-router-dom";

const Help = () => {

    return (
        <div className="box">
            <Link to="/" className="box_title" type='button'>
                Help
            </Link>


            <div className="box_detail">
                <Link to="/" className="box_detail_text" type="button">Live Chat</Link>
                <Link to="/" className="box_detail_text" type="button">Email Sign Up</Link>
                <Link to="/" className="box_detail_text" type="button">Contact Us</Link>

            </div>
        </div>
    )
}

export default Help