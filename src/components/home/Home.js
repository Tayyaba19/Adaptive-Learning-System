import React,{useState} from 'react'
import "./Home.css";
import { useNavigate, } from "react-router-dom";
import {useEffect} from 'react'
import axios from 'axios'

 function Home(){
    const [topic,setTopic]=useState([])
    const navigate = useNavigate()
    const getTopic=()=>{
        axios.get(`http://localhost:5000/`)
        .then((response)=>{
          console.log(response);
          const myTopic=response.data;
          setTopic(myTopic)
        })
        }
        useEffect(()=>getTopic(),[])
  return (
    <div className="home">
        <h1> C Language</h1>
        <div className='text'>
          {topic.map((item,i)=>(
          <li onClick={() => navigate(`/video/${i+1}`)}>{item.Name}</li>
          ))}
        </div> 
    </div>
  )
}

export default Home