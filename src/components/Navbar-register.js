import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbarreg(){
    const language = useSelector((state) => state.Chooselanguage);

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
                    <nav className="navbar navbar-expand-lg bg-transparent position-absolute top-0 start-0 z-3 w-100">
                        <div className="container ">
                            <a className="navbar-brand text-uppercase fs-4 fw-bold text-light" href="#">Education</a>
                            <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars text-light"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="nav-link fs-5 text-light" data-section=".about-us">من نحن</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link fs-5 text-light" data-section=".features">المميزات</button>
                                </li>
                                <li className="nav-item ms-1">
                                    <Link type="button" className="btn btn-outline-primary outline-btn fs-5 text-light">تسجيل الدخول</Link>
                                </li>
                                <li className="nav-item ms-1">
                                    <Link to={"register"} type="button" className="btn btn-outline-primary outline-btn fs-5 text-light">انشاء حساب</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </>
            )
        } else {
            return(
                <>
                    <nav className="navbar navbar-expand-lg bg-transparent position-absolute top-0 start-0 z-3 w-100">
                        <div className="container ">
                            <a className="navbar-brand text-uppercase fs-4 fw-bold text-light" href="#">Education</a>
                            <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars text-light"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="nav-link fs-5 text-light" data-section=".about-us">About</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link fs-5 text-light" data-section=".features">Features</button>
                                </li>
                                <li className="nav-item ms-1">
                                    <Link to={"login"} type="button" className="btn btn-outline-primary outline-btn fs-5 text-light">Login</Link>
                                </li>
                                <li className="nav-item ms-1">
                                    <Link to={"register"} type="button" className="btn btn-outline-primary outline-btn fs-5 text-light">Register</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </>
            )
        }
    }

    useEffect(() => {
        // Select All Links
        const allLinks = document.querySelectorAll(".nav-link");

        function scrollToSomewhere(elements) {

        elements.forEach(ele => {

            ele.addEventListener("click", (e) => {
        
            e.preventDefault();
        
            document.querySelector(e.target.dataset.section).scrollIntoView({
        
                behavior: 'smooth'
        
            });
        
            });
        
        });

        }

        scrollToSomewhere(allLinks);
    })

    return(
        <>
            {changelanguage()}
        </>
    )
}

export default Navbarreg;