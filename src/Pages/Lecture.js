import { useParams } from "react-router-dom";
import Bullets from "../components/Bullets";
import Navbar from "../components/Navbar";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Lecture(){
    let lectureid = useParams()

    const [lecturetitle, setlecturetitle] = useState();
    const [video, setvideo] = useState();
    const [desc, setdesc] = useState();

    useEffect(() => {
        fetch(`http://localhost:9000/lectures/${lectureid.lectureid}`).then((res) => res.json()).then((data) => {
            setlecturetitle(data.title)
            setvideo(data.videoUrl)
            setdesc(data.description)
        })
    })
    return(
        <>
            <Randomizebackground/>
            <Slidebar/>
            <Navbar/>
            <Bullets/>
            <div className="landing-text position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                <div className="container">
                    <h3 className="text-light fw-bold fs-2">We help you <span>achieve</span> your dream</h3>
                    <p className="text-light fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias at ab id animi.</p>
                </div>
            </div>
            <div className="lecture">
                    <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                        <span className="w-100 position-absolute top-0 start-0"></span>
                        <span className="h-100 position-absolute top-0 end-0"></span>
                        <span className="w-100 position-absolute bottom-0 end-0"></span>
                        <span className="h-100 position-absolute bottom-0 start-0"></span>
                        {lecturetitle}
                    </h2>
                <div className="container p-4">
                <section class="ex text-center">
                    <video src={video}></video>
                </section>
                <section class="content">
                    <h1 className="desc">describtion:</h1>
                    <p>{desc}</p>
                    <h1 className="files">files:</h1>
                    <ul>
                        <li><a href="">science1.pdf</a></li>
                        <li><a href="">science1.pdf</a></li>
                        <li><a href="">science1.pdf</a></li>
                    </ul>          
                </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Lecture;