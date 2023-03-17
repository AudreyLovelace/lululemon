import {Link} from "react-router-dom";
import "./secondLine.scss"

const LuluDetails  = () => {


    return (
        <div className="box_second">
            <Link to="/" className="box_second_detail" type='button'>CAREERS</Link>
            <Link to="/" className="box_second_detail" type="button">COMMUNITY</Link>
            <Link to="/" className="box_second_detail" type="button">LULULEMON STUDIO</Link>
            <Link to="/" className="box_second_detail" type="button">SUSTAINABILITY</Link>
            <Link to="/" className="box_second_detail" type="button">SOCIAL IMPACT</Link>
            <Link to="/" className="box_second_detail" type="button">DIVERSITY AND INCLUSION</Link>
            <Link to="/" className="box_second_detail" type="button">LULULEMON APPS</Link>

        </div>
    )
}

export default LuluDetails