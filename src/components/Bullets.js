import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Bullets(){
    const bulletsoption = useSelector((state) => state.Bullets);
    
    const showbullets = () => {
        if(bulletsoption === true){
            return(
                <div className="nav-bullets position-fixed end-0 top-50 translate-middle-y z-3">
                    <Link to={"/lectures"} className="bullet position-relative rounded-circle">
                        <p className="show-tooltip position-absolute text-center d-none">Lectures</p>
                    </Link>
                    <div className="bullet position-relative rounded-circle" data-section=".Home Work">
                        <p className="show-tooltip position-absolute text-center d-none">Home Work</p>
                    </div>
                    <Link to={"/exams"} className="bullet position-relative rounded-circle" data-section=".Exams">
                        <p className="show-tooltip position-absolute text-center d-none">Exams</p>
                    </Link>
                    <div className="bullet position-relative rounded-circle" data-section=".Contact Us">
                        <p className="show-tooltip position-absolute text-center d-none">Contact Us</p>
                    </div>
                    <Link to={"/profile"} className="bullet position-relative rounded-circle" data-section=".My Profile">
                        <p className="show-tooltip position-absolute text-center d-none">My Profile</p>
                    </Link>
                </div>
            )
        }
    }

    useEffect(() => {
        // Select All Bullets
        const allBullets = document.querySelectorAll(".nav-bullets .bullet");

        // Select All Links
        const allLinks = document.querySelectorAll(".nav-link");
    })

    return(
        <>
            {showbullets()}
        </>
    )
}

export default Bullets;