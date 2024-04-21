import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

export default function Features(){
    const language = useSelector((state) => state.Chooselanguage);

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
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
        } else {
            return(
                <>
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
            {changelanguage()}
        </>
    )
}