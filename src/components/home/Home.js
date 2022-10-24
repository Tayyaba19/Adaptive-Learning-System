import React from 'react'
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Video from '../video';

 function Home(){
var counter;
    const navigate = useNavigate()
    
  return (
    <div className="home">
        
        <div className='text'>
           <h1> C Language</h1>
     <div>
      <h3>C Intorduction </h3>
        <ul>
            <li onClick={() => navigate('/video')} counter="1"> Keywords and Identifires </li>
            <li onClick={() => navigate('/video')} counter="2">Variables & Identifiers</li>
            <li onClick={() => navigate('/video')} counter="3">C Data types</li>
            <li onClick={() => navigate('/video')} counter="4">Operators</li>
        </ul>
     </div>
     <div>
        <h3>C flow Control</h3>
        <ul>
            <li onClick={() => navigate('/video')} counter="5">If else</li>
            <li  onClick={() => navigate('/video')} counter="6">for Loop</li>
            <li onClick={() => navigate('/video')} counter="7">While Loop</li>
            <li onClick={() => navigate('/video')} counter="8">Breake & continue & goto </li>
            <li onClick={() => navigate('/video')} counter="9">Switch Case</li>
        </ul>
     </div>
     <div>
      <h3>C Functions</h3> 
       <ul>
            <li onClick={() => navigate('/video')} counter="10"> Programming Functions</li>
            <li onClick={() => navigate('/video')} counter="11">User Defiend Fuctions</li>
            <li onClick={() => navigate('/video')} counter="12">Function Types</li>
            <li onClick={() => navigate('/video')} counter="13">Recursion</li>
        </ul>
     </div>
     <div>
        <h3>C Arrays</h3>
        <ul>
            <li onClick={() => navigate('/video')} counter="14">Programming Array</li>
            <li onClick={() => navigate('/video')} counter="15">Multi-dimension Array</li>
            <li onClick={() => navigate('/video')} counter="16">Array & Function</li>
        </ul>
     </div>
     <div>
        <h3>C Pointers</h3>
        <ul>
            <li onClick={() => navigate('/video')} counter="17">Programming Pointers</li>
            <li onClick={() => navigate('/video')} counter="18">Pointers & Array</li>
            <li onClick={() => navigate('/video')} counter="19">Pointers & Functions</li>
            <li onClick={() => navigate('/video')} counter="20">Memory Allocation</li>
        </ul>
     </div>
     <div>
       <h3> C Structure</h3>
        <ul>
            <li onClick={() => navigate('/video')} counter="21">C structure</li>
            <li onClick={() => navigate('/video')} counter="22">C struct & Pointers</li>
            <li onClick={() => navigate('/video')} counter="23"> C struct & Function</li>
        </ul>
     </div>
     <div>
        <h3>C Files</h3>
        <ul>
            <li onClick={() => navigate('/video')} counter="24">Files Input/Output</li>
        </ul>
     </div>
     </div>
    </div>
  )
}

export default Home