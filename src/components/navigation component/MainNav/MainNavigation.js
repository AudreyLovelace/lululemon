import FiveListDes from "./FiveListDes";
import "./mainNavigation.scss";
import { Bag, Icon } from "./Icon";
import { InputInfo } from "./InputInfo";

const MainNavigation = () => {
  return (
    <>
      <div className="leftSide">
        <Icon />
        <FiveListDes />
      </div>
      <div className="rightSide">
        <div className="rightSide_input">
          <InputInfo />
        </div>
        <div className="rightSide_bag">
          <Bag />
        </div>
      </div>
    </>
  );
};
export default MainNavigation;
