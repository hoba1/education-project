import { useEffect, useState } from "react";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import Navbar from "../components/Navbar";
import Bullets from "../components/Bullets";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import ShowContentCards from "../components/ShowContentCards";

function HomeWorks(){
    const [HomeWorks, setHomeWorks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/homeworks").then((res) => res.json()).then((data) => setHomeWorks(data))
    } ,[])
    
    return(
        <>
            <Navbar />
            <Slidebar />
            <Randomizebackground />
            <Bullets />
            <LandingText />
            <ShowContentCards contentName="homeWorks" content={HomeWorks} />
            <Footer />
        </>
    )
}

export default HomeWorks;