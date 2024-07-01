import { useEffect, useState } from "react";
import AdminActionsTable from "../components/AdminActionsTable";
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

export default function ProfileTeacher() {
  const [lectures, setlectures] = useState([]);
  const [HomeWorks, setHomeWorks] = useState([]);
  const [exams, setexams] = useState([]);

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
          <StudentsTable />
          <AdminActionsTable />
        </div>
        <ProfileStudentGraphs />
      </div>
      <div className="control-website container">
        <ShowContentCards
          contentName="lectures"
          content={lectures}
          control={true}
        />
        <ShowContentCards
          contentName="homeWorks"
          content={HomeWorks}
          control={true}
        />
        <ShowContentCards contentName="exams" content={exams} control={true} />
        <div className="admins-box my-5">
          <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
            <span className="w-100 position-absolute top-0 start-0"></span>
            <span className="h-100 position-absolute top-0 end-0"></span>
            <span className="w-100 position-absolute bottom-0 end-0"></span>
            <span className="h-100 position-absolute bottom-0 start-0"></span>
            Admins
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <ProfileCard control={true} />
            </div>
            <div className="col">
              <ProfileCard control={true} />
            </div>
            <div className="col">
              <ProfileCard control={true} />
            </div>
            <div className="col">
              <ProfileCard control={true} />
            </div>
          </div>
        </div>
        <ReqestsTable />
      </div>
      <Footer />
    </>
  );
}
