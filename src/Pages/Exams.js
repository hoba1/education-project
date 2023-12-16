import { useEffect, useState } from "react";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import Navbar from "../components/Navbar";
import Bullets from "../components/Bullets";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";

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
            <div className="landing-text position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                <div className="container">
                    <h3 className="text-light fw-bold fs-2">We help you <span>achieve</span> your dream</h3>
                    <p className="text-light fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias at ab id animi.</p>
                </div>
            </div>
            <div className="Exams">
                <div className="container">
                    <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                        <span className="w-100 position-absolute top-0 start-0"></span>
                        <span className="h-100 position-absolute top-0 end-0"></span>
                        <span className="w-100 position-absolute bottom-0 end-0"></span>
                        <span className="h-100 position-absolute bottom-0 start-0"></span>
                        Exams
                    </h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4 mb-4">
                        {exams.map((exam) => {
                            return(
                                <Fade className="col">
                                    <div className="card h-100 overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title text-center pb-2 fw-bold fs-3">{exam.examtitle}</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <Link to={`/exams/${exam.id}`} className="btn btn-primary float-end">Go To Exam</Link>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Exams;