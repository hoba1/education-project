import React, { useState } from 'react';
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

function Signupstudent() {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    AuthService.register(firstname, secondname, username, email, password, role).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        navigate("/home")
      },
      (error) => {
        const resMessage =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setSuccessful(false);
          setMessage(resMessage);
      }
    );
  };
    return(
        <>
            <Randomizebackground />
            <Slidebar />    
            <form onSubmit={handleRegister} className="signup-form position-absolute top-50 start-50 translate-middle z-3">
        <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
          <span className="w-100 position-absolute top-0 start-0"></span>
          <span className="h-100 position-absolute top-0 end-0"></span>
          <span className="w-100 position-absolute bottom-0 end-0"></span>
          <span className="h-100 position-absolute bottom-0 start-0"></span>
          Sign up
        </h2>
        <div className="inputs mb-5 mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
          <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="first-name" required />
          <input type="text" value={secondname} onChange={e => setSecondname(e.target.value)} placeholder="second-name" required/>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="user-name" required/>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="put  your email" required/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="put your password" required/>
          <input className="" type="submit" value="signup"/>
        </div>
      </form>
        </>
    )
}

export default Signupstudent;