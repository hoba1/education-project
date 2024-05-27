import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return(
        <>
            <div className="footer mt-5 p-3">
                <div className="container text-center">
                    <h2 className="mb-4 footer-heading pb-2 mx-auto fw-bold">Education</h2>
                    <div className="col-9 col-md-4 col-lg-3 social-links mb-3 d-flex mx-auto justify-content-between">
                        <a><FontAwesomeIcon icon={faFacebook} className="fs-4"/></a>
                        <a><FontAwesomeIcon icon={faYoutube} className="fs-4"/></a>
                        <a><FontAwesomeIcon icon={faInstagram} className="fs-4"/></a>
                        <a><FontAwesomeIcon icon={faTwitter} className="fs-4"/></a>
                    </div>
                    <p>All Right Reserved. Created With Love By <a className="team-link">AOL Programing</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer;

