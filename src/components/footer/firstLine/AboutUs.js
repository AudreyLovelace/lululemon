import "./boxes.scss"
import {Link} from "react-router-dom";
import {useState} from "react";
import {arrow} from "../../../helper/constants";
import {dividerClasses} from "@mui/material";


const AboutUs = () => {

    const data = [{id: 0, label: "Our Business"}, {id: 1, label: "Media"},
        {id: 3, label: "Investors"}, {id: 4, label: "Strategic Sales"}, {id: 5, label: "Affiliates and Creators"}
    ];


    const [isOpen, setOpen] = useState(false)

    const dropDown = () => {
        setOpen(!isOpen)
    }

    return (
        <>
            <div className="box">
                <Link to='./' className='box_header_title'>
                    About Us
                </Link>
                <div className='box_detail '>
                    {data.map((item) => {
                        return (<Link to='./' key={item.id} className="box_detail text"> {item.label}</Link>)
                    })}
                </div>
            </div>


            <div className='dropdown'>
                <div className='dropdown-header' onClick={dropDown}>
                    About Me
                    <div className={isOpen ? "iconFirst open" : "iconFirst"}>{arrow}</div>
                </div>
                <div className={`dropdown-body ${isOpen && 'open'} `}>
                    {data.map((item) => (
                        <Link to='./' key={item.id} className='box_detail dropdown-item text'>
                            {item.label}
                        </Link>
                    ))}

                </div>
                <hr/>
            </div>

        </>
    )
}

export default AboutUs