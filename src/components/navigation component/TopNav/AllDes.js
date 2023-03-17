import {GiftCard, Global, SignIn, StoreLocation, WishList} from "./TopIcon";
import "./AllDes.scss"
import {Link} from "react-router-dom";
import {BagLogo, GiftCard1, LuluLogo, SignIn1, StoreLocation1, WishList1} from "./NewLogo";
import {useState} from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import MenuBar from "./MenuBar";

const AllDes = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };


    return (<div className='allLine'>
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


            <div className='resDesLogo'>
                <div>
                    <Link to="./">
                        <LuluLogo/>
                    </Link>
                </div>
                <div className='resDesLogo_fiveLoge'>
                    <Link to="./" className='resDesLogo_fiveLoge_each'>
                        <SignIn1/>
                    </Link>
                    <Link to="./" className='resDesLogo_fiveLoge_each'>
                        <StoreLocation1/>
                    </Link>
                    <Link to="./" className='resDesLogo_fiveLoge_each'>
                        <WishList1/>
                    </Link>
                    <Link to="./" className='resDesLogo_fiveLoge_each'>
                        <GiftCard1/>
                    </Link>
                    <Link to="./" className='resDesLogo_fiveLoge_each'>
                        <BagLogo/>
                    </Link>

                    {/*<MenuBar/>*/}


                </div>
            </div>
        </div>
    )
}


export default AllDes
