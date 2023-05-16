import React from "react";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const google = () => {
    // window.open("http://localhost:8080/auth/google", "_self");
    window.open("https://social-media-login.onrender.com/auth/google", "_self");
   
    
  //  navigate("/about")
    
  };

  const github = () => {
    // window.open("http://localhost:8080/auth/github", "_self");
    window.open("https://social-media-login.onrender.com/auth/github", "_self");
    // navigate("/about")

  };


  const facebook = () => {
    // window.open("http://localhost:8080/auth/facebook", "_self");
    window.open("https://social-media-login.onrender.com/auth/facebook", "_self");
    // navigate("/about")
  };
  return (
    <div>
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="center">
            <div className="loginButton google" onClick={google}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook" onClick={facebook}>
              <img src={Facebook} alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
