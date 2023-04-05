import "./boxes.scss"
import {Link} from "react-router-dom";
import {useState} from "react";
import {arrow} from "../../../helper/constants";

const MyAcc = () => {


    const data = [
        {id: 0, label: "Membership Program"},
        {id: 1, label: "Sign In"},
        {id: 3, label: "Register"},
        {id: 4, label: "Order Status"},
        {id: 5, label: "Returns"}
    ];

    const [isOpen, setOpen] = useState(false);

    const dropdown = () => setOpen(!isOpen);


    return (
        <>
            <div className="box">
                <Link to="/" className="box_header_title" type='button'>
                    MY ACCOUNT
                </Link>
                <div className="box_detail">
                    {data.map(item => (
                            <span key={item.id} className="box_detail text">
                                {item.label}
                            </span>
                        )
                    )}
                </div>
            </div>


            <div className='dropdown'>
                <div className='dropdown-header ' onClick={dropdown}>
                    MY ACCOUNT
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

export default MyAcc