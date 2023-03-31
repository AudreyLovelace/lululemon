import "./topNavigation.scss";
import MainNavigation from "./MainNav/MainNavigation";
import AllDes from "./TopNav/AllDes";

const TopNavigation = (props) => {

    const {dataFromWhatNew} = props

    console.log('TopNavigation props',props)

    return (
        <>
            <div>
                <AllDes dataFromTopNavigation={dataFromWhatNew}/>
            </div>

            <div className="main sticky">
                <div className="container">
                    {" "}
                    <MainNavigation/>
                </div>
            </div>
        </>
    );
};
export default TopNavigation;
