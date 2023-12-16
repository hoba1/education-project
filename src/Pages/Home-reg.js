import Navbarreg from "../components/Navbar-register";
import Slidebar from '../components/Slidebar'; 
import Randomizebackground from "../components/Randomizebackground";
import Bulletsreg from "../components/Bulletsreg";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";

function Homereg(){
    const language = useSelector((state) => state.Chooselanguage);

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
                    <div className="landing-text position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                        <div className="container">
                            <h3 className="text-light fw-bold fs-2">نحن نساعدك علي <span>تحقيق</span> حلمك</h3>
                            <p className="text-light fs-5">نحن دائما سنكون بجانبك لمساعدتك علي الوصول الي اعلي المراتب</p>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div className="landing-text position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                        <div className="container">
                            <h3 className="text-light fw-bold fs-2">We help you <span>achieve</span> your dream</h3>
                            <p className="text-light fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias at ab id animi.</p>
                        </div>
                    </div>
                    <div className="about-us mt-5 mb-5">
                        <div className="container mt-5 mb-5">
                            <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                                <span className="w-100 position-absolute top-0 start-0"></span>
                                <span className="h-100 position-absolute top-0 end-0"></span>
                                <span className="w-100 position-absolute bottom-0 end-0"></span>
                                <span className="h-100 position-absolute bottom-0 start-0"></span>
                                About us
                            </h2>
                            <div className="row d-flex align-items-center mt-5 mb-5 pt-5">
                                <div className="info-text col-lg-6" >
                                    <h4 className="mb-4 fs-3 position-relative text-center ">How Are We ?</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel autem ipsum odio animi obcaecati repellat, modi ipsa debitis incidunt quis aperiam temporibus vero alias deleniti, quia aut quod laboriosam? Itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam unde laborum possimus est aliquid minus ad expedita magni tenetur rem dignissimos, consectetur, totam explicabo minima, repudiandae cupiditate ullam aliquam?</p>
                                </div>
                                <div className="image col-lg-6">
                                    <img src="../images/about.jpg" className="w-100" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="features">
                        <div className="header">
                            <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                                <span className="w-100 position-absolute top-0 start-0"></span>
                                <span className="h-100 position-absolute top-0 end-0"></span>
                                <span className="w-100 position-absolute bottom-0 end-0"></span>
                                <span className="h-100 position-absolute bottom-0 start-0"></span>
                                our Features
                            </h2>
                        </div>
                        <div className="content d-flex justify-content-center flex-wrap">       
                            <Fade className="card">
                                <div className="info text-center">
                                    <h3 className="mb-3 pb-3">the nice design</h3>
                                    <p>we make a nice design that help the student to enjoy with the site </p>
                                </div>
                            </Fade>
                            <Fade className="card">
                                <div className="info text-center">
                                    <h3 className="mb-3 pb-3">easy cards system</h3>
                                    <p>we have done the site in a very easy card system</p>
                                </div>
                            </Fade>

                            <Fade className="card">
                                <div className="info text-center">
                                    <h3 className="mb-3 pb-3">the nice design</h3>
                                    <p>we make a nice design that help the student to enjoy with the site </p>
                                </div>
                            </Fade>
                            <Fade className="card">
                                <div className="info text-center">
                                    <h3 className="mb-3 pb-3">easy cards system</h3>
                                    <p>we have done the site in a very easy card system</p>
                                </div>
                            </Fade>
                        
                        </div>
                    </div>
                </>
            )
        }
    }
    return(
        <>
            <Navbarreg />
            <Slidebar />
            <Randomizebackground />
            <Bulletsreg />
            {changelanguage()}
            <Footer />
        </>
    )
}

export default Homereg;