import React from "react";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";

const Login = () => {
  const google = () => {
    // window.open("http://localhost:8080/auth/google/callack", "_self");
    window.open("https://social-media-login.onrender.com/auth/google/callback", "_self");
  };

  const github = () => {
    // window.open("http://localhost:8080/auth/github/callback", "_self");
    window.open("https://social-media-login.onrender.com/auth/github/callback", "_self");

  };

  const facebook = () => {
    // window.open("http://localhost:8080/auth/facebook", "_self");
    window.open("https://social-media-login.onrender.com/auth/facebook/callback", "_self");
    
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
