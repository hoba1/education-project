import Slidebar from "../components/Slidebar";
import Randomizebackground from "../components/Randomizebackground";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Register(){
    const language = useSelector((state) => state.Chooselanguage);

    const changelanguage = () => {
        if(language === "arabic"){
            return(
                <>
                    <div className="Register-box position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                        <div className="container">
                            <h1 className="text-light mb-4">من انت ؟</h1>
                            <Link to={"signup"} type="button" className="btn btn-primary btn-lg fs-3 m-2">طالب</Link>
                            <Link to={"signup"} type="button" className="btn btn-primary btn-lg fs-3 m-2">ولي امر</Link>
                            <Link to={"signup"} type="button" className="btn btn-primary btn-lg fs-3 m-2">مساعد</Link>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div className="Register-box position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                        <div className="container">
                            <h1 className="text-light mb-4">Who are you ?</h1>
                            <Link to={"signupstudent"} type="button" className="btn btn-primary btn-lg fs-3 m-2">Student</Link>
                            <Link to={"signupparent"} type="button" className="btn btn-primary btn-lg fs-3 m-2">Parent</Link>
                            <Link to={"signupadmin"} type="button" className="btn btn-primary btn-lg fs-3 m-2">Admin</Link>
                        </div>
                    </div>
                </>
            )
        }
    }
    return(
        <>
            <Slidebar />
            <Randomizebackground />
            {changelanguage()}
        </>
    )
}

export default Register