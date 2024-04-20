import { useSelector } from "react-redux";
import { useEffect } from "react";

function Bulletsreg(){
    const bulletsoption = useSelector((state) => state.Bullets);
    const language = useSelector((state) => state.Chooselanguage);

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
                    <div className="nav-bullets position-fixed end-0 top-50 translate-middle-y z-3">
                        <div className="bullet position-relative rounded-circle" data-section=".about-us">
                            <p className="show-tooltip position-absolute text-center d-none">من نحن</p>
                        </div>
                        <div className="bullet position-relative rounded-circle" data-section=".features">
                            <p className="show-tooltip position-absolute text-center d-none">المميزات</p>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div className="nav-bullets position-fixed end-0 top-50 translate-middle-y z-3">
                        <div className="bullet position-relative rounded-circle" data-section=".about-us">
                            <p className="show-tooltip position-absolute text-center d-none">About Us</p>
                        </div>
                        <div className="bullet position-relative rounded-circle" data-section=".features">
                            <p className="show-tooltip position-absolute text-center d-none">Features</p>
                        </div>
                    </div>
                </>
            )
        }
    }
    
    const showbullets = () => {
        if(bulletsoption === true){
            return(
                <>
                    {changelanguage()}
                </>
            )
        }
    }

    useEffect(() => {
        // Select All Bullets
        const allBullets = document.querySelectorAll(".nav-bullets .bullet");

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

        scrollToSomewhere(allBullets);
    })

    return(
        <>
            {showbullets()}
        </>
    )
}

export default Bulletsreg;