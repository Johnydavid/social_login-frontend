import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Post from "./pages/Post";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";


import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  const localuser = localStorage.getItem("token");
  // setUser(localuser)

  


  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8080/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          
        })
        .catch((err) => {
          console.log(err);
        });

    
    };
    getUser();


   
  }, []);

  return (
    <BrowserRouter>
       <div>
      
        <Navbar user={user} />
       
        
        <Routes>
       {localuser &&
       <Route path = "/" element={<Navbar />}></Route>}

        <Route path="/signup" exact element={<Signup />}></Route>
          <Route path = "/about" exact element={<About />}/>

          {localuser &&
               <Route path="/" element={<Home />} />}


          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />

          
        <Route path="/logout" exact element={<Logout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;