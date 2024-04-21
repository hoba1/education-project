import Navbarreg from "../components/Navbar-register";
import Slidebar from '../components/Slidebar'; 
import Randomizebackground from "../components/Randomizebackground";
import Bulletsreg from "../components/Bulletsreg";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import AboutUs from "../components/About-us";
import Features from "../components/Features";

function Homereg(){
    return(
        <>
            <Navbarreg />
            <Slidebar />
            <Randomizebackground />
            <Bulletsreg />
            <LandingText />
            <AboutUs />
            <Features />
            <Footer />
        </>
    )
}

export default Homereg;