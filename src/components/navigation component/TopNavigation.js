import "./topNavigation.scss";
import MainNavigation from "./MainNav/MainNavigation";
import AllDes from "./TopNav/AllDes";

const TopNavigation = (props) => {

    const {dataFromWhatNew} = props

    return (
        <>
            <div>
                {" "}
                <div className="container">
                    <AllDes dataFromTopNavigation={dataFromWhatNew}/>
                </div>
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
