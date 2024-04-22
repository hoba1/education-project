import { useEffect, useState } from "react";
import Bullets from "../components/Bullets";
import Navbar from "../components/Navbar";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import LatestContent from "../components/LatestContent";

export default function Home(){
    const [lectures, setlectures] = useState([]);
    const [exams, setexams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/lectures").then((res) => res.json()).then((data) => setlectures(data));
        fetch("http://localhost:9000/exams").then((res) => res.json()).then((data) => setexams(data));
    } ,[])

    return(
        <>
            <Navbar />
            <Slidebar />
            <Randomizebackground />
            <Bullets />
            <LandingText />
            <LatestContent />
            <Footer />
        </>
    )
}