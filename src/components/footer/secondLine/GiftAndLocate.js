import {Link} from "react-router-dom";
import './secondLine.scss'

const GiftAndLocate = () => {

    return (
        <div className="box_second">
            <Link to="/" className="box_second_detail" type='button'>GIFT CARDS</Link>
            <Link to="/" className="box_second_detail" type="button">STORE LOCATOR</Link>

            <div className="box_second_other_four">
                <Link to="/" className="box_second_other_four_detail" type="button">Privacy Policy (Last Updated: 9/28/22)</Link>
                <Link to="/" className="box_second_other_four_detail" type="button">UK Modern Slavery Act</Link>
                <Link to="/" className="box_second_other_four_detail" type="button">California Transparency Act</Link>
                <Link to="/" className="box_second_other_four_detail" type="button">Accessibility Statement</Link>
            </div>
        </div>
    )
}

export default GiftAndLocate