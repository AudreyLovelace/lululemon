import FiveListDes from "./FiveListDes";
import "./mainNavigation.scss"
import {Bag, Icon} from "./Icon";
import {InputInfo} from "./InputInfo";

const MainNavigation = () => {
    return (<>
        <div className="leftSide">
            <Icon/>
            <FiveListDes/>

        </div>
        <div className="rightSide">
            <InputInfo/>
            <Bag/>
        </div>
    </>)
}
export default MainNavigation