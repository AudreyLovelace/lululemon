import "./topNavigation.scss";
import MainNavigation from "./MainNav/MainNavigation";
import AllDes from "./TopNav/AllDes";

const TopNavigation = () => {
  return (
    <>
      <div>
        {" "}
        <div className="container">
          <AllDes />
        </div>
      </div>

      <div className="main sticky">
        <div className="container">
          {" "}
          <MainNavigation />
        </div>
      </div>
    </>
  );
};
export default TopNavigation;
