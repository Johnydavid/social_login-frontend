import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
// import Navbar from "../home/Navbar";

const Signup = () => {
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target: ip }) => {
    setInput({ ...input, [ip.name]: ip.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
    //   const url ="https://stack-overflow-61cl.onrender.com/api/users";
      const { input: res } = await axios.post(url, input);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErr(error.response.data.message);
      }
    }
  };

  return (
    <div>        
      
          <div className={"signup"}>
        
        <h1 className="signupTitle">Welcome to GUVI</h1>
        <div className={"wrapper"}>   
        <div className={"right"}>           
                       
            <form  onSubmit={handleSubmit} className={"signupForm"}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                onChange={handleChange}
                value={input.userName}
                required
                className={"input"}
              ></input>

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={input.email}
                required
                className={"input"}
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="on"
                onChange={handleChange}
                value={input.password}
                required
                className={"input"}
              ></input>
              {err && <div >{err}</div>}
              <button type="submit" className={"submit"}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>

  );
};

export default Signup;