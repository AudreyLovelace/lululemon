import "./boxes.scss"
import {useState} from "react";
import {Link} from "react-router-dom";
import {arrow} from "../../../helper/constants";

const Help = () => {

    const data = [
        {id: 0, label: "FAQ"},
        {id: 1, label: "Services"},
        {id: 3, label: "Ordering"},
        {id: 4, label: "Shipping Policy"},
        {id: 5, label: "Returns"},
        {id: 6, label: "Redeem Gift Cards"},
        {id: 7, label: "Sizing"},
        {id: 8, label: "Our Products"}
    ]


    const [isOpen, setOpen] = useState(false)

    const dropDown = () => setOpen(!isOpen)

    return (
        <>
            <div className="box">
                <Link to='./' className="box_header_title" type="button">
                    Help
                </Link>
                <div className="box_detail">
                    {data.map(item => (
                        <span key={item.id} className="box_detail text">
                            {item.label}
                        </span>)
                    )}
                </div>
            </div>


            <div className="dropdown">
                <div className='dropdown-header' onClick={dropDown}>
                    Help
                    <div className={isOpen ? "iconFirst open" : "iconFirst"}>{arrow}</div>
                </div>

                <div className={`dropdown-body ${isOpen && 'open'}`}>
                    {data.map(item => (
                        <span className="box_detail dropdown-item text" key={item.id}>
                            {item.label}
                        </span>
                    ))}

                </div>
                <hr/>
            </div>

        </>
    )

}

export default Help