import { useEffect, useState } from "react";
import Bullets from "../components/Bullets";
import Navbar from "../components/Navbar";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";

function Home(){
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
            <div className="lectures-section mt-5 pt-3 pb-5">
                <div className="container">
                    <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                        <span className="w-100 position-absolute top-0 start-0"></span>
                        <span className="h-100 position-absolute top-0 end-0"></span>
                        <span className="w-100 position-absolute bottom-0 end-0"></span>
                        <span className="h-100 position-absolute bottom-0 start-0"></span>
                        Latest-Lectures
                    </h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                        {lectures.map((lecture) => {
                            if(lectures.indexOf(lecture) >= (lectures.length - 3)){               
                                return(
                                    <Fade className="col col-md-6 col-lg-4 mb-4">
                                        <div className="card h-100 overflow-auto">
                                            <img src={lecture.thumbnailUrl} className="card-img-top h-75" alt="..."/>
                                            <div className="card-body h-50 mb-2">
                                                <h5 className="card-title pb-2 text-center">{lecture.title}</h5> 
                                                <p className="card-text">{lecture.description}</p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-center">
                                                <small>{lecture.uploadTime}</small>
                                                <Link to={`/lectures/${lecture.id}`} className="btn text-light">open</Link>
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            }
                        })}
                        <Link to={"/lectures"} type="button" className="btn btn-outline-primary outline-btn fs-5 d-block mx-auto mt-5">Show More</Link>
                    </div>
                </div>
            </div>
            <div className="exams-section mt-5 pt-3 pb-5">
                <div className="container">
                    <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                        <span className="w-100 position-absolute top-0 start-0"></span>
                        <span className="h-100 position-absolute top-0 end-0"></span>
                        <span className="w-100 position-absolute bottom-0 end-0"></span>
                        <span className="h-100 position-absolute bottom-0 start-0"></span>
                        Latest-Exams
                    </h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                        {exams.map((exam) => {
                            if(exams.indexOf(exam) >= (exams.length - 3)){               
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
                            }
                        })}
                        <Link to={"/exams"} type="button" className="btn btn-outline-primary outline-btn fs-5 d-block mx-auto mt-5">Show More</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;