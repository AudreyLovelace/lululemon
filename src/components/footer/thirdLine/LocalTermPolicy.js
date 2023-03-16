import './localAdd.scss'
import {Link} from "react-router-dom";

const LocalTermPolicy = () => {
    return (
        <div className='thirdLine'>
            <div className='thirdLine_otherTwo'>
                <Link to='/' className='thirdLine_otherTwo_term'>Privacy Policy (Last Updated: 9/28/22)</Link>
                <span>|</span>
                <Link to='/' className='thirdLine_otherTwo_term'>Terms of Use (Last Updated: 10/5/22)</Link>
            </div>
            <p className='thirdLine_localAddName'>© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7</p>


        </div>
    )
}
export default LocalTermPolicy