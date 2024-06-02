import Bullets from "../components/Bullets";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/Profile-Card";
import ProfileStudentCards from "../components/Profile-Student-Cards";
import ProfileStudentGraphs from "../components/Profile-Student-Graphs";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";

export default function ProfileStudent() {
    return(
        <>
            <Navbar />
            <Slidebar />
            <Randomizebackground />
            <Bullets />
            <LandingText />
            {/* يحتوي علي الاحصاءات للطالب والرسوم البيانيه */}
            <div className="profile-container d-flex justify-content-center gap-5">
                {/* يحتوي علي الاحصاءات للطالب وكل ما يتم عمله الطالب ونسبه اكتمال هذا العمل  */}
                <div className="profile-cards  mt-4 ms-4 " style={{maxWidth: '60%'}}>
                    <ProfileCard />
                    <ProfileStudentCards />
                </div>
                <ProfileStudentGraphs />    
            </div>
            <Footer />
        </>
    )
}