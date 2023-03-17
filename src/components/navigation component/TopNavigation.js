import './topNavigation.scss'
import MainNavigation from "./MainNav/MainNavigation";
import AllDes from "./TopNav/AllDes";

const TopNavigation = () => {
    return (<>
            <div>
                <AllDes/>
            </div>

            <div className="main">
                <MainNavigation/>
            </div>
        </>
    )

}
export default TopNavigation