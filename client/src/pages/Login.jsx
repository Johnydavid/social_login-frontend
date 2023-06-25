import React from "react";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const google = async (e) => {
    e.preventDefault();
    try {
 
     
    //   const url = "http://localhost:8080/api/auth";
    const url = "https://social-media-login.onrender.com/auth/google/callback";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      localStorage.setItem("displayName", res.data1);
      window.location = "/";
    
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
 
  };

  // const google = () => {
  //   // window.open("http://localhost:8080/auth/google/callack", "_self");
  //   // window.open("https://social-media-login.onrender.com/auth/google/callback", "_self");
  //   const url = "https://social-media-login.onrender.com/auth/google/callback";
  //   const { data: res } = await axios.post(url, data);
  //   localStorage.setItem("token", res.data);
  //   localStorage.setItem("displayName", res.data1);
  //   window.location = "/";
  // };

  const github = () => {
    window.open("http://localhost:8080/auth/github/callback", "_self");
    // window.open("https://social-media-login.onrender.com/auth/github/callback", "_self");

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
