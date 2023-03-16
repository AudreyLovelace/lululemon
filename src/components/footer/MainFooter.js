import MyAcc from "./firstLine/MyAcc";
import Help from "./firstLine/Help";
import AboutUs from "./firstLine/AboutUs";
import ContactUs from "./firstLine/ContactUs";
import "./mainFooter.scss"
import LuluDetails from "./secondLine/LuluDetails";
import GiftAndLocate from "./secondLine/GiftAndLocate";
import Logo from "./secondLine/Logo";
import LocalTermPolicy from "./thirdLine/LocalTermPolicy";


const MainFooter = () => {
    return (
        <div className="mainFooter">
            <div className="mainFooter_grid">
                <MyAcc/>
                <ContactUs/>
                <AboutUs/>
                <Help/>
                <LuluDetails/>
                <GiftAndLocate/>
                <Logo/>
            </div>

            <hr/>
            <LocalTermPolicy/>

        </div>
    )
}
export default MainFooter