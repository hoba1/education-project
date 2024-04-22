import { useEffect, useState } from "react";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import Navbar from "../components/Navbar";
import Bullets from "../components/Bullets";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import ShowContentCards from "../components/ShowContentCards";

function Exams(){
    const [exams, setexams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/exams").then((res) => res.json()).then((data) => setexams(data))
    } ,[])
    
    return(
        <>
            <Navbar />
            <Slidebar />
            <Randomizebackground />
            <Bullets />
            <LandingText />
            <ShowContentCards contentName="exams" content={exams} />
            <Footer />
        </>
    )
}

export default Exams;