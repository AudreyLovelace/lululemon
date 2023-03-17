import React, {useState} from 'react';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function MenuBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="menu-bar">
            <button onClick={() => setShowMenu(!showMenu)}><MenuOutlinedIcon/></button>
            {showMenu && (
                <div className="menu">
                    <ul>
                        <li>Menu Item 1</li>
                        <li>Menu Item 2</li>
                        <li>Menu Item 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MenuBar;