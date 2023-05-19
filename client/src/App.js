import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import About from "./pages/About";
// import Post from "./pages/Post";
import axios from "axios";




import { useState, useEffect } from "react";

const App = () => {


	// const [user, setUser] = useState(null);

	// const getUser = async () => {
	// 	try {
  
	// 		const url = "https://social-media-login.onrender.com/auth/login/success";
	// 		const { data } = await axios.get(url, { withCredentials: true });
	// 		setUser(data.user._json);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	getUser();
	// }, []);



  const [user, setUser] = useState(null);

  useEffect(() => {
    
    // const url = "https://social-media-login.onrender.com/auth/login/success"
    const url = "https://social-media-login.onrender.com/auth/github/read";
    axios.get(url)
      .then((res) => {
        console.log(res);
        setUser(res.displayName
          );
        console.log(res.displayName
          
          )
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  return (

    <BrowserRouter>
      <div>   

        <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> */}
     
        <Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/> 
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
