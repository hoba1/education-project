import Randomizebackground from "../components/Randomizebackground"
import Slidebar from "../components/Slidebar"

function Signupstudent(){
    return(
        <>
            <Randomizebackground />
            <Slidebar />    
            <form className="signup-form position-absolute top-50 start-50 translate-middle z-3" action="">
                <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
                    <span className="w-100 position-absolute top-0 start-0"></span>
                    <span className="h-100 position-absolute top-0 end-0"></span>
                    <span className="w-100 position-absolute bottom-0 end-0"></span>
                    <span className="h-100 position-absolute bottom-0 start-0"></span>
                    Sign up
                </h2>
                <div className="inputs mb-5 mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
                    <input type="text" name="" id="first" placeholder="user-first-name" required  />
                    <input type="text" placeholder="user-second-name" id="second" required/>
                    <input type="text" placeholder="user-third-name" id="third" required/>
                    <input type="text" placeholder="user-quatre-name" id="four" required/>
                    <input type="number" placeholder="put your first-number" id="num1" required/>
                    <input type="number" placeholder="put your second-number" id="num2"/>
                    <input type="number" placeholder="put your-number" id="num3" required/>
                    <input type="number" placeholder="put the second-number" id="num4"/>
                    <input type="number" placeholder=" your grade" id="num5" required/>
                    <input type="email" placeholder="put  your email"required id="email"/>
                    <input type="password" placeholder="put your password" id="pass1" required/>
                    <input type="password" placeholder="regist your password" id="pass2" required/>
                    <label for="img">add your image</label>
                    <input type='file' src="" alt="" placeholder="add your img" id="img"/>
                    <input className="" type="submit" value="signup"/>
                </div>
            </form>
        </>
    )
}

export default Signupstudent;