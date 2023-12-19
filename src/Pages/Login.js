import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import React, { Component, useState } from 'react';
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    AuthService.login(username, password).then(
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
            <form onSubmit={handleLogin} className="login-form position-absolute top-50 start-50 translate-middle z-3">
                <h2 className="text-center mt-5 section-title position-relative fw-bold overflow-hidden m-auto">
                    <span className="w-100 position-absolute top-0 start-0"></span>
                    <span className="h-100 position-absolute top-0 end-0"></span>
                    <span className="w-100 position-absolute bottom-0 end-0"></span>
                    <span className="h-100 position-absolute bottom-0 start-0"></span>
                    Login
                </h2>
                <div className="inputs mt-5 d-flex align-items-center flex-column gap-5 justify-content-center">
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="user name" required/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="put your password"required/>
                </div>
                <input className="login-btn" type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;