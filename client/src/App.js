// import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div >

 
       <BrowserRouter>
      <Routes>

<Route path="/" exact element={<Home/>}></Route>
      {/* <Route path="/home" exact element={<Home />}></Route> */}
      


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
