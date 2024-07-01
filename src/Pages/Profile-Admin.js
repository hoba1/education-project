import { useEffect, useState } from "react";
import Bullets from "../components/Bullets";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/Profile-Card";
import ProfileStudentGraphs from "../components/Profile-Student-Graphs";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import StudentsTable from "../components/Students-Table";
import ShowContentCards from "../components/ShowContentCards";
import ReqestsTable from "../components/ReqestsTable";
import StudentRegistration from "../components/StudentRegistration";

export default function ProfileAdmin(props) {
  const [lectures, setlectures] = useState([]);
  const [homeWorks, setHomeWorks] = useState([]);
  const [exams, setexams] = useState([]);

  console.log(props.tasks.includes("student-statics"));

  useEffect(() => {
    fetch("http://localhost:9000/lectures")
      .then((res) => res.json())
      .then((data) => setlectures(data));
    fetch("http://localhost:9000/exams")
      .then((res) => res.json())
      .then((data) => setexams(data));
    fetch("http://localhost:9000/homeworks")
      .then((res) => res.json())
      .then((data) => setHomeWorks(data));
  }, []);

  return (
    <>
      <Navbar />
      <Slidebar />
      <Randomizebackground />
      <Bullets />
      <LandingText />
      {/* يحتوي علي الاحصاءات للطلاب والرسوم البيانيه */}
      <div className="profile-container d-flex justify-content-center gap-5">
        {/* يحتوي علي الاحصاءات للطالب وكل ما يتم عمله الطالب ونسبه اكتمال هذا العمل  */}
        <div className="profile-cards  mt-4 ms-4 " style={{ maxWidth: "60%" }}>
          <ProfileCard />
          {props.tasks.includes("student-statics") && <StudentsTable />}
        </div>
        {props.tasks.includes("student-statics") && <ProfileStudentGraphs />}
      </div>
      <div className="control-website container">
        {props.tasks.includes("lectures") && <ShowContentCards
          contentName="lectures"
          content={lectures}
          control={true}
        />}
        {props.tasks.includes("homeworks") && <ShowContentCards
          contentName="homeWorks"
          content={homeWorks}
          control={true}
        />}
        {props.tasks.includes("exams") &&  <ShowContentCards contentName="exams" content={exams} control={true} />}
        {props.tasks.includes("requests") && <ReqestsTable />}
        {props.tasks.includes("student-registration") && <StudentRegistration />}
      </div>
      <Footer />
    </>
  );
}
