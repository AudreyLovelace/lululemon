import "./inputInfor.scss"
import {useState} from "react";
import {Close, Search} from "./Icon";

export const InputInfo = () => {
    const [message, setMessage] = useState("")
    const showCloseIcon = message.length > 0;

    const cbInput = (evt) => {
        let newMessage = evt.target.value.trim().toLowerCase();
        if (evt.key === 'Enter') {
            if (newMessage !== message) {
                setMessage(newMessage);
            }
        }
    }

    return (
        <>
            <form className="search_form">
                <Search/>

                <input
                    type="text"
                    placeholder="Search"
                    className="search_input"
                    value={message}
                    onKeyDown={cbInput}
                    onChange={(evt) => setMessage(evt.target.value)}
                />

                {showCloseIcon && <Close/>}
                 {/*todo onclick with fetch data*/}
            </form>
        </>
    )
}

