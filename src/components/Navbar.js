import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-transparent position-absolute top-0 start-0 z-3 w-100">
                <div className="container ">
                    <a className="navbar-brand text-uppercase fs-4 fw-bold text-light" href="#">Education</a>
                    <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} className="text-light"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/lectures"} className="nav-link fs-5 text-light" >Lectures</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link fs-5 text-light">Home Work</button>
                        </li>
                        <li className="nav-item">
                            <Link to={"/exams"} className="nav-link fs-5 text-light">Exams</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link fs-5 text-light">Contact Us</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link fs-5 text-light">My Profile</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;