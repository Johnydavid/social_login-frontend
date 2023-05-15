import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Post from "./pages/Post";
import axios from "axios";
import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     // fetch("https://guvi-socialmedia.netlify.app/auth/login/success",{
  //     fetch("https://social-media-login.onrender.com/auth/login/success",{
  //     // fetch("http://localhost:8080/auth/login/success", {
  
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //      "Access-Control-Allow-Origin" : "*",
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
       
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
    
  // }, []);



  // const [user, setUser] = useState();

  useEffect(() => {
    
    const url ="https://social-media-login.onrender.com/auth/login/success";
    // const url = "http://localhost:8080/auth/github/read";
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setUser(res.data[0]
          );
        console.log(res.data[0]
          
          )
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Navbar />
    </>
    // <BrowserRouter>
    //   <div>
   

    //     <Routes>
    //       <Route path="/about" element={<About />}></Route>

    //       <Route path="/" element={<Home />} />
   
    //       <Route
    //         path="/login"
    //         element={ <Login />  }
    //       />
    //       <Route
    //         path="/post/:id"
    //         element= {<Post /> }
    //       />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
};

export default App;
