import { useSelector } from "react-redux";

export default function AboutUs(){
    const language = useSelector((state) => state.Chooselanguage);

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
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
                </>
            )
        } else {
            return(
                <>
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
                </>
            )
        }
    }
    return(
        <>
            {changelanguage()}
        </>
    )
}