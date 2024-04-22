import { useEffect, useState } from "react";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import Navbar from "../components/Navbar";
import Bullets from "../components/Bullets";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import ShowContentCards from "../components/ShowContentCards";

function Lectures(){
    const [lectures, setlectures] = useState([]);
    const [limit, setLimit] = useState(3)

    useEffect(() => {
        fetch("http://localhost:9000/lectures").then((res) => res.json()).then((data) => setlectures(data));
    } ,[])

    return(
        <>
            <Navbar />
            <Slidebar />
            <Randomizebackground />
            <Bullets />
            <LandingText />
            <ShowContentCards contentName="lectures" content={lectures} />
            <Footer />
        </>
    )
}

export default Lectures;