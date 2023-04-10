import {Link} from "react-router-dom";
import "./secondLine.scss"

const LuluDetails = () => {

    const luluDetails = [
        {id: 0, label: 'CAREERS'},
        {id: 1, label: 'COMMUNITY'},
        {id: 2, label: 'LULULEMON STUDIO'},
        {id: 3, label: 'SUSTAINABILITY'},
        {id: 4, label: 'SOCIAL IMPACT'},
        {id: 5, label: 'DIVERSITY AND INCLUSION'},
        {id: 6, label: 'LULULEMON APPS'},
    ]


    return (
        <div className="box_second">
            {luluDetails.map((item)=>{
                return(
                    <div key={item.id} className='box_second_detail'>
                        {item.label}
                    </div>)
            })}
        </div>
    )
}

export default LuluDetails