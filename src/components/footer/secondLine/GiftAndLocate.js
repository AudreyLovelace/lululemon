import {Link} from "react-router-dom";
import './secondLine.scss'

const GiftAndLocate = () => {
    const topTwo = [
        {id: 0, label: 'GIFT CARDS'},
        {id: 1, label: 'STORE LOCATOR'}
    ]

    const otherFour = [
        {id: 0, label: 'Privacy Policy (Last Updated:9/28/22)'},
        {id: 1, label: 'UK Modern Slavery Act'},
        {id: 2, label: 'California Transparency Act'},
        {id: 3, label: 'Accessibility Statement'}
    ]

    return (
        <div className="box_second">
            {topTwo.map(item => {
                return (
                    <div className="box_second_detail" key={item.id}>{item.label}</div>
                )
            })}

            <div className="box_second_other_four">
                {otherFour.map((item) => {
                    return (
                        <div key={item.id} className="box_second_other_four_detail">
                            {item.label}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GiftAndLocate