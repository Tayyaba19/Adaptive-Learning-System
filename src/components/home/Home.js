import React from 'react'
import "./Home.css";
import { useNavigate, } from "react-router-dom";
// import Video from '../video/video';

 function Home(){
    const navigate = useNavigate()
    
  return (
    <div className="home">
        
        <div className='text'>
           <h1> C Language</h1>
     <div>
      <h3>C Intorduction </h3>
        <ul>

            <li onClick={() => navigate('/video/0')} >keywords ,veriables & Indentifiers</li>
            <li onClick={() => navigate('/video/1')}>C Data types</li>
            <li onClick={() => navigate('/video/2')}>Operators</li>
        </ul>
     </div>
     <div>
        <h3>C flow Control</h3>
        <ul>
            <li onClick={() => navigate('/video/3')}>If else</li>
            <li  onClick={() => navigate('/video/4')}>for Loop</li>
            <li onClick={() => navigate('/video/5')}>While Loop</li>
            <li onClick={() => navigate('/video/6')}>Breake & continue & goto </li>
        </ul>
     </div>
     <div>
      <h3>C Functions</h3> 
       <ul>
            <li onClick={() => navigate('/video/7')}> Programming Functions</li>
            <li onClick={() => navigate('/video/8')}>Function Types</li>
            <li onClick={() => navigate('/video/9')}>Recursion</li>
        </ul>
     </div>
     <div>
        <h3>C Arrays</h3>
        <ul>
            <li onClick={() => navigate('/video/10')}>Programming Array</li>
            <li onClick={() => navigate('/video/11')}>Multi-dimension Array</li>
            <li onClick={() => navigate('/video/12')}>Array & Function</li>
        </ul>
     </div>
     <div>
        <h3>C Pointers</h3>
        <ul>
            <li onClick={() => navigate('/video/13')}>Programming Pointers</li>
            <li onClick={() => navigate('/video/14')}>Pointers & Array</li>
            <li onClick={() => navigate('/video/15')}>Pointers & Functions</li>
            <li onClick={() => navigate('/video/16')}>Memory Allocation</li>
        </ul>
     </div>
     <div>
       <h3> C Structure</h3>
        <ul>
            <li onClick={() => navigate('/video/17')}>C structure</li>
            <li onClick={() => navigate('/video/18')}>C struct & Pointers</li>
            <li onClick={() => navigate('/video/19')}> C struct & Function</li>
        </ul>
     </div>
     <div>
        <h3>C Files</h3>
        <ul>
            <li onClick={() => navigate('/video/20')}>Files Input/Output</li>
        </ul>
     </div>
     </div>
    </div>
  )
}

export default Home