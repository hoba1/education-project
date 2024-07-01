import { useEffect, useState } from "react";
import Bullets from "../components/Bullets";
import Navbar from "../components/Navbar";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import ShowContentCards from "../components/ShowContentCards";

export default function Home() {
  const [lectures, setlectures] = useState([]);
  const [HomeWorks, setHomeWorks] = useState([]);
  const [exams, setexams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/lectures")
      .then((res) => res.json())
      .then((data) => setlectures(data));
    fetch("http://localhost:9000/homeworks")
      .then((res) => res.json())
      .then((data) => setHomeWorks(data));
    fetch("http://localhost:9000/exams")
      .then((res) => res.json())
      .then((data) => setexams(data));
  }, []);

  return (
    <>
      <Navbar />
      <Slidebar />
      <Randomizebackground />
      <Bullets />
      <LandingText />
      <ShowContentCards
        contentName="lectures"
        content={lectures}
        latest={true}
      />
      <ShowContentCards
        contentName="homeWorks"
        content={HomeWorks}
        latest={true}
      />
      <ShowContentCards contentName="exams" content={exams} latest={true} />
      <Footer />
    </>
  );
}
