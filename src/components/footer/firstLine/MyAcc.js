import "./boxes.scss"
import {Link} from "react-router-dom";
import {useState} from "react";

const MyAcc = () => {

    const [showDetail, setShowDetail] = useState(false)

    const cbHandle = () => {
        setShowDetail(!showDetail)
    }


    return (
        <div className="box">
            <Link to="/" className="box_title" type='button' onClick={cbHandle}>
                MY ACCOUNT
            </Link>


            <div className="box_detail">
                <Link to="/" className="box_detail_text" type="button">Membership Program</Link>
                <Link to="/" className="box_detail_text" type="button">Sign In</Link>
                <Link to="/" className="box_detail_text" type="button">Register</Link>
                <Link to="/" className="box_detail_text" type="button">Order Status</Link>
                <Link to="/" className="box_detail_text" type="button">Returns</Link>
            </div>
        </div>
    )
}

export default MyAcc