import { useEffect, useRef, useState } from "react";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import Navbar from "../components/Navbar";
import Bullets from "../components/Bullets";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleArrowLeft, faCircleArrowRight, faClose, faSquareCheck, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import LandingText from "../components/LandingText";

function Exam(){
    const [status, setstatus] = useState("show exam");
    const [exam, setexam] = useState([]);
    const [examtitle, setexamtitle] = useState();
    const [min, setmin] = useState();
    const [countdown, setcountdown] = useState(0);
    
    const [hourscount, sethourscount] = useState("0");
    const [mincount, setmincount] = useState("0");
    const [seccount, setseccount] = useState("0");
    
    const [completeexampercent, setcompleteexampercent] = useState(0);

    const [answeredqutions, setansweredqutions] = useState([]);
    const [numofunknownqutions, setnumofunknownqutions] = useState(0);
    const [numofcorrectqutions, setnumofcorrectqutions] = useState(0);
    const [numofwrongqutions, setnumofwrongqutions] = useState(0);

    const [exammark, setexammark] = useState(0)
    const [finalmark, setfinalmark] = useState(0)
    
    let examid = useParams();
    
    let interval = useRef();

    const showresultorexam = () => {
        if(status === "show result"){
            return(
                <>
                    <div className="results-container">
                        <div className="result-box text-center fs-3">
                            <div className="total-mark d-flex align-items-center flex-column mb-3">
                                <p className="m-0">Your Mark</p>
                                <p className="result pt-2 pb-2 ps-3 pe-3 rounded">{exammark} / {finalmark}</p>
                                <div className="circle-progress" style={{background: `conic-gradient(var(--main-color) ${((exammark / finalmark) * 100) * 3.6}deg, var(--background-color) 0deg)`}}>
                                    <p className="z-3 fs-3 position-absolute top-50 start-50 translate-middle">{Math.round((exammark / finalmark) * 100)}%</p>
                                </div>
                            </div>
                            <div className="mb-3">The Correct Answers: <span className="correct p-2 rounded">{numofcorrectqutions}</span></div>
                            <div className="mb-3">The Un Known Answers: <span className="non-answer p-2 rounded">{numofunknownqutions}</span></div>
                            <div className="mb-3">The Wrong Answers: <span className="wrong p-2 rounded">{numofwrongqutions}</span></div>
                            <div className="correct-qutions mt-4">
                                {exam.map((qution) => {
                                    return(
                                        <>
                                            {answeredqutions.map((e) => {
                                                console.log(e.getAttribute("id"))
                                                if(e.getAttribute("id") == exam.indexOf(qution)){
                                                    if(e.classList.contains("un-known")){
                                                        return(
                                                            <div className="wrong rounded mb-4 p-4 text-light">
                                                                <div className="qution mb-3 border-bottom pb-2">{qution.title}</div>
                                                                <div className="d-flex justify-content-end align-items-center gap-2">
                                                                    <p className="m-0">{qution.right_answer}</p>
                                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    if(e.classList.contains("wrong")){
                                                        let answerchoice = "";
                                                        e.childNodes.forEach((el) => {
                                                            if(el.classList.contains("active")){
                                                                answerchoice = el.textContent
                                                            }
                                                        })
                                                        return(
                                                            <>
                                                                <div className="wrong rounded mb-4 p-4 text-light">
                                                                    <div className="qution mb-3 border-bottom pb-2">{qution.title}</div>
                                                                    <div className="">
                                                                        <div className="wrong-answer mb-2 d-flex justify-content-end align-items-center gap-2">
                                                                            <p className="m-0">{answerchoice}</p>
                                                                            <FontAwesomeIcon icon={faSquareXmark} />
                                                                        </div>
                                                                        <div className="right-answer d-flex justify-content-end align-items-center gap-2">
                                                                            <p className="m-0">{qution.right_answer}</p>
                                                                            <FontAwesomeIcon icon={faSquareCheck} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if(e.classList.contains("correct")){
                                                        return(
                                                            <div className="correct rounded mb-4 p-4 text-light">
                                                                <div className="qution mb-3 border-bottom pb-2">{qution.title}</div>
                                                                <div className="d-flex justify-content-end align-items-center gap-2">
                                                                    <p className="m-0">{qution.right_answer}</p>
                                                                    <FontAwesomeIcon icon={faSquareCheck} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                }
                                            })}
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div id="carouselExampleCaptions" className="carousel slide container-of-qutions">
                            <div className="d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon icon={faBars} className="btn-bars btn gear-qutions position-absolute end-0 z-2" onClick={() => appearbar()}/>
                                <div className="ms-2 d-flex align-items-center gap-2">
                                    <button className="btn fs-5 end-exam" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width: "fit-content"}}>Finish</button>
                                    <div className="Timer p-2 rounded fs-5 fw-bold">{starttimer(hourscount,mincount,seccount)}</div>
                                    <div className="controls d-flex gap-3">
                                        <FontAwesomeIcon icon={faCircleArrowLeft} className="prev text-light fs-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"/>
                                        <FontAwesomeIcon icon={faCircleArrowRight} className="next text-light fs-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"/>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-indicators position-absolute flex-column m-0 mt-5 end-0 top-0 z-3 d-none overflow-auto">
                                {exam.map((qutions) => {
                                    if(exam.indexOf(qutions) === 0){
                                        return(
                                            <button className="btn active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">{exam.indexOf(qutions) + 1}</button>
                                        )
                                    } else {
                                        return(
                                            <button className="btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={exam.indexOf(qutions)} aria-label={`Slide ${exam.indexOf(qutions) + 1}`}>{exam.indexOf(qutions) + 1}</button>
                                        )
                                    }
                                })}
                            </div>
                            <div className="carousel-inner text-center fs-3">
                                {exam.map((qutions) => {
                                    if(exam.indexOf(qutions) === 0){
                                        return(
                                            <div className="carousel-item pt-5 mt-5 active z-2">
                                                <div className="qution-box">
                                                    {qutions.title}
                                                    <div className="row choice-box mt-5 gap-3 position-relative d-flex justify-content-center" id={0}>
                                                        <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                        
                                                        }}>{qutions.answer_1}</button>
                                                        <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                        
                                                        }}>{qutions.answer_2}</button>
                                                        <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                        
                                                        }}>{qutions.answer_3}</button>
                                                        <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                        
                                                        }}>{qutions.answer_4}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return(
                                            <div className="carousel-item pt-5 mt-5 z-2">
                                                <div className="qution-box">
                                                    {qutions.title}
                                                </div>
                                                <div className="row choice-box mt-5 gap-3 position-relative d-flex justify-content-center" id={exam.indexOf(qutions)}>
                                                    <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                    
                                                    }}>{qutions.answer_1}</button>
                                                    <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                    
                                                    }}>{qutions.answer_2}</button>
                                                    <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                    
                                                    }}>{qutions.answer_3}</button>
                                                    <button className="btn choice btn-primary col-sm-6 col-md-5 fs-5" onClick={(e) => {handleActive(e)
                                                    
                                                    }}>{qutions.answer_4}</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className="row position-absolute top-0 d-flex justify-content-between align-items-center gap-3 w-100">
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex justify-content-between border-0">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are You Sure To Finish The Exam</h1>
                                                <FontAwesomeIcon icon={faClose} className="btn" data-bs-dismiss="modal" aria-label="Close"/>
                                            </div>
                                            <div className="modal-footer border-0">
                                                <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-result"  onClick={() => {setstatus("show result")
                                                result()}
                                                } data-bs-dismiss="modal">End Exam</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress position-relative mt-4" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{width: `${Math.round((completeexampercent / exam.length) * 100)}%`}}></div>
                                <span className="position-absolute top-50 start-50 translate-middle fs-6">{Math.round((completeexampercent / exam.length) * 100)+"%"}</span>
                            </div>
                    </div>
                </>
            )
        }
    } 

    const result = () => {
        const arrofanweredquitons = [];
        let numberofunknownqutions = 0;
        let numberofcorrectqutions = 0;
        let numberofwrongqutions = 0;

        let exmark = 0
        document.querySelectorAll(".choice-box").forEach((e) => {
            if(e.classList.contains("complete")){
                e.childNodes.forEach((el) => {
                    if(el.classList.contains("active")){
                        if(el.textContent === exam[e.getAttribute("id")].right_answer){
                            numberofcorrectqutions = numberofcorrectqutions + 1
                            exmark = exmark + exam[e.getAttribute("id")].qution_mark
                            e.classList.add("correct");
                        } else {
                            numberofwrongqutions = numberofwrongqutions + 1
                            e.classList.add("wrong");
                        }
                    }
                })
            } else {
                e.classList.add("un-known");
                numberofunknownqutions = numberofunknownqutions + 1
            }
            arrofanweredquitons.push(e);
            setansweredqutions(arrofanweredquitons)
            setnumofcorrectqutions(numberofcorrectqutions);
            setnumofwrongqutions(numberofwrongqutions);
            setnumofunknownqutions(numberofunknownqutions);
            setexammark(exmark)
            document.querySelector(".container-of-qutions").classList.add("d-none")
        })
    }

    const formattime = (time) => {
        interval = setInterval(() => {
            time = time - 1;

            let hours = Math.floor(time / 60 /60);
            let min = Math.floor(time / 60 - hours * 60);
            let sec = Math.floor(time - (hours * 60 * 60 + min * 60));

            
            if(time < 0){
                clearInterval(interval.current);
            }  else {
                sethourscount(hours);
                setmincount(min);
                setseccount(sec)
            }
        }, 1000);
    }
    
    const starttimer = (hours,min,sec) => {
        let formathours = hours;
        let formatmin = min;
        let formatsec = sec;
        if(hours < 10){
            formathours = `0${hours}`
        }
        if(min < 10){
            formatmin = `0${min}`
        }
        if(sec < 10){
            formatsec = `0${sec}`
        }
        return `${formathours}:${formatmin}:${formatsec}`
    }

    const appearbar = () => {
        if(document.querySelector(".carousel-indicators").classList.contains("d-none")){
            document.querySelector(".carousel-indicators").classList.replace("d-none","d-block");
        } else {        
            document.querySelector(".carousel-indicators").classList.replace("d-block","d-none");
        }
    }

    function handleActive(ev) {
        
        // Remove Active Class From All Childrens
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            
            element.classList.remove("active");
        });
        
        // Add Active Class On Self
        ev.target.classList.add("active");
        ev.target.parentElement.classList.add("complete")
        const completedqutions = document.querySelectorAll(".complete")
        setcompleteexampercent(completedqutions.length);
    };

    
    useEffect(() => {
        fetch(`http://localhost:9000/exams/${examid.examid}`).then((res) => res.json()).then((data) => {
            setexamtitle(data.title)
            setexam(data.qutions)
            setmin(data.exam_duration_by_min)
            setcountdown(data.exam_duration_by_min * 60)
            setfinalmark(data.final_mark)
        })
        
    } , [])
    
    useEffect(() => {
        formattime(countdown)
        return () => {
            clearInterval(interval.current)
        } 
    }, [countdown])

    useEffect(() => {
        if(hourscount === 0 && mincount === 0 && seccount === 0){
            result()
            setstatus("show result")
        }
    })
    return(
        <>
            <Navbar />
            <Slidebar />
            <Randomizebackground />
            <Bullets />
            <LandingText />
            <div className="Exams mb-4">
                <div className="container">
                    <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                        <span className="w-100 position-absolute top-0 start-0"></span>
                        <span className="h-100 position-absolute top-0 end-0"></span>
                        <span className="w-100 position-absolute bottom-0 end-0"></span>
                        <span className="h-100 position-absolute bottom-0 start-0"></span>
                        {examtitle}
                    </h2>
                    <div className="exam-box mt-5 p-3 rounded position-relative">
                        {showresultorexam()}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Exam;