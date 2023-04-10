import React from 'react';
import {Link} from 'react-router-dom';
import './fiveListDes.scss';
import {DropDown} from "../DropDown/DropDown";

function FiveListDes() {


    const meunList = [
        {id: 0, label: 'WOMEN'},
        {id: 1, label: "MEN"},
        {id: 2, label: "ACCESSORIES"}]

    const menu2 = [
        {id: 0, label: 'SHOES'},
        {id: 1, label: 'STUDIO'}
    ]


    return (<>
            <nav className='fiveLogo'>
                <div className='fiveLogo_dropDown'>
                    <div className="fiveLogo_dropDown_menuList">{
                        meunList.map(item => (
                                <div key={item.id} className="fiveLogo_dropDown_menuList_mainBtn">
                                    {item.label}
                                </div>
                            )
                        )
                    }</div>
                    <div
                        className="fiveLogo_dropDown_page">
                        <DropDown/>
                    </div>
                </div>
            </nav>

            {menu2.map(item => (
                    <Link to='/' key={item.id} type='button' className='fiveLogo_dropDown_menuList_mainBtn'>
                        {item.label}
                    </Link>

                )
            )}
        </>
    )
        ;
}

export default FiveListDes;

