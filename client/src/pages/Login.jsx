import React from 'react'
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";

import { Link, useNavigate} from "react-router-dom";
// import styles from "./login.module.css";
import { useState } from "react";
import axios from "axios";
// import "../App.css";



  const Login = () => {
    const [data, setData] = useState({
      email: "",
      password: "",
    });
  
    const navigate = useNavigate();
  
    const [err, setErr] = useState("");
  
    const handleChange = ({ target: ip }) => {
      setData({ ...data, [ip.name]: ip.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {

        
        const url = "http://localhost:8080/api/auth";
        // const url ="https://stack-overflow-61cl.onrender.com/api/auth";
  
        const { data: res } = await axios.post(url, data);
        console.log(res);
        localStorage.setItem("token", res.data);
        localStorage.setItem("name", res.data1);
      
          if (localStorage.key) {
            navigate("/about");
          } else {
            navigate("/");
          }
     
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setErr(error.response.data.message);
        }
        console.log(error);
      }
    };
  

  const google=()=>{
    window.open("http://localhost:8080/auth/google", "_self")
  }

  const github = () => {
    window.open("http://localhost:8080/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:8080/auth/facebook", "_self");
  };
  return (
    <div>  

    <div className="login">
        
    <h1 className="loginTitle">Choose a Login Method</h1>
    <div className="wrapper">
      <div className="left">
        <div className="loginButton google" onClick={google}>
          <img src={Google} alt="" className="icon" />
          Google
        </div>
        <div className="loginButton facebook" onClick={facebook} >
          <img src={Facebook} alt="" className="icon" />
          Facebook
        </div>
        <div className="loginButton github" onClick={github}>
          <img src={Github} alt="" className="icon" />
          Github
        </div>
      </div>
      <div className="center">
        <div className="line" />
        <div className="or">OR</div>
      </div>
      <div className="right">
      <form  onSubmit={handleSubmit}>
             
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={"input"}
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                autoComplete="on"
                value={data.password}
                required
                className={"input"}
              ></input>
              {err && <div >{err}</div>}
              <button type="submit" className="submit">
                Sign In
              </button>
            </form>
          </div>
          <div >
            <h3>No Account?</h3>
            <Link to="/signup">
              <button type="button" className="submit">
                Sign Up
              </button>
            </Link>
          </div>
    
    </div>
  </div>
  </div>
);
};

export default Login