import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";

function Login(){
    return(
        <>
            <Randomizebackground />
            <Slidebar />
            <form action="" className="login-form position-absolute top-50 start-50 translate-middle z-3">
                <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
                    <span className="w-100 position-absolute top-0 start-0"></span>
                    <span className="h-100 position-absolute top-0 end-0"></span>
                    <span className="w-100 position-absolute bottom-0 end-0"></span>
                    <span className="h-100 position-absolute bottom-0 start-0"></span>
                    Login
                </h2>
                <div className="inputs mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
                    <input type="text" name="" id="" placeholder="user name" required/>
                    <input type="email" name="" id="" placeholder="put your email"required/>
                    <input type="password" name="" id="" placeholder="put your password"required/>
                </div>
                <input className="login-btn" type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;