import {GiftCard, Global, SignIn, StoreLocation, WishList} from "./TopIcon";
import "./AllDes.scss"
import {Link} from "react-router-dom";

const AllDes = () => {
    return (
        <div className="topLine">
            <Link to="/" className="topLine_details">
                <StoreLocation/>
                <p className="topLine_details_names">Store Location</p>
            </Link>

            <Link to="/" className="topLine_details">
                <SignIn/>
                <p className="topLine_details_names">Sign In</p>
            </Link>

            <Link to="/" className="topLine_details">
                <WishList/>
                <p className="topLine_details_names">Wish List</p>
            </Link>

            <Link to="/" className="topLine_details">
                <GiftCard/>
                <p className="topLine_details_names">Gift Card</p>
            </Link>

            <Link to="/" className="topLine_details">
                <Global/>
                <p className="topLine_details_names">Can</p>
            </Link>
        </div>
    )
}
export default AllDes