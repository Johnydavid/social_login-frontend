import React from 'react'
import {posts} from "../data";
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className={"home"}>
        <Navbar />
        {posts.map(post=>(

<Card />
        ))}
           

        
    
        
        </div>
  )
}

export default Home