import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileCard(props) {
    return(
        <>
            {/* يحتوي علي المعلومات الشخصيه للمستخدم */}
            <div className="card p-2">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1717243940~exp=1717244540~hmac=b32280e57c161f438d7f7e1d542ec1575372466ccc26036262d9eb736d746da5" className="rounded-circle m-3" style={{width: '150px' , height: '150px'}} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title pb-2 mb-2">Mohab Khaled Elsayed</h5>
                            <div className="card-text d-flex align-items-center">
                                <FontAwesomeIcon icon={faPhone} />
                                <p className="m-0 ms-3">+01271994320</p>
                            </div>
                            <div className="card-text d-flex align-items-center">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p className="m-0 ms-3">Mohab.khaled@gmail.com</p>
                            </div>
                            <button className="btn btn-outline-primary outline-btn fs-5 float-end my-3">{props.control ? "Show Profile" : "Edit Profile"}</button>
                            {props.control && <button className="btn btn-outline-primary outline-btn fs-5 my-3">Change Task</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}