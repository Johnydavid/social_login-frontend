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
      <div >
        <div >
          <div >
            <h4>Welcome to </h4>
            <h2> GUVI</h2>
            <Link to="/login">
              <button type="button" >
                Sign in
              </button>
            </Link>
          </div>
          <div >
            <form  onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                onChange={handleChange}
                value={input.userName}
                required
                // className={styles.input}
              ></input>

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={input.email}
                required
                // className={styles.input}
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="on"
                onChange={handleChange}
                value={input.password}
                required
                // className={styles.input}
              ></input>
              {err && <div >{err}</div>}
              <button type="submit" >
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