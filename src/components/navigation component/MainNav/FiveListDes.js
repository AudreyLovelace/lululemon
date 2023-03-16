import {Link} from "react-router-dom";
import "./fiveListDes.scss"

const FiveListDes = () => {
    return (
        <nav>
            <Link to="/" type="button" className="mainBtn">WOMEN</Link>
            <Link to="/" type="button" className="mainBtn">MEN</Link>
            <Link to="/" type="button" className="mainBtn">ACCESSORIES</Link>
            <Link to="/" type="button" className="mainBtn">SHOES</Link>
            <Link to="/" type="button" className="mainBtn">STUDIO</Link>
        </nav>)
}
export default FiveListDes