import React from 'react'
import './video.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';


 const Video = () =>{

    const navigate =useNavigate();
    const { id } = useParams();

    let data = {
      language :
 [
  {
     id :  0,
     name : "Introduction to C ",
     description : "keywords ,variables & Indentifiers ",
     videoUrl : "https://www.youtube.com/embed/KnvbUiSxvbM"
  },
  {
      id :  1,
      name : "Introduction to C ",
      description : "C data types",
      videoUrl : "https://www.youtube.com/embed/sARaqR0hRI4" 
  },
  {
      id :  2,
      name : "Introduction to C ",
      description : "C operators",
      videoUrl : "https://www.youtube.com/embed/_57FcSBtJNU"
  },
  { id :  3,
      name : " C Flow Control ",
      description : "If else ",
      videoUrl : "https://www.youtube.com/embed/K8mntKyBJGc"
   },
   {
       id : 4,
       name : "introduction to C ",
       description : "For Loop",
       videoUrl : "https://www.youtube.com/embed/Xtl1oGtcX-8"
   },
   {
       id :  5,
       name : "introduction to C ",
       description : "While Loop",
       videoUrl : "https://www.youtube.com/embed/WgS_SF1VrEk"
   },
   {
       id :  6,
       name : "introduction to C ",
       description : "Switch Case (Break , Continue & goto)",
       videoUrl : "https://www.youtube.com/embed/DpPf9XskST8"
   },
  
   {  id :  7,
      name : " C Functions ",
      description : "programming functions ",
      videoUrl : "https://www.youtube.com/embed/Npo1u37lcg8"
   },
   {
    id :  8,
    name : "C Functions",
    description : "Function Types",
    videoUrl : "https://www.youtube.com/embed/puIK6kHcuqA"
   },
   {
    id :  9,
    name : "C Functions",
    description : "Recursion",
    videoUrl : "https://www.youtube.com/embed/61T0cZ8KyGM"
   },
  {
    id :  10,
    name : " C Arrays ",
    description : "programming Array ",
    videoUrl : "https://www.youtube.com/embed/MOeGnamlUP4"
   },
   {
    id :  11,
    name : "C Arrays ",
    description : "Multi-dimentional Array",
    videoUrl : "https://www.youtube.com/embed/ATA6dYDz954" 
   },
   {
    id :  12,
    name : "C Arrays",
    description : "Array & Function",
    videoUrl :"https://www.youtube.com/embed/2aScqfAI3oc" 
   },
   {
     id :  13,
     name : " C Pointers ",
     description : "programming Pointers ",
     videoUrl : "https://www.youtube.com/embed/KGhacRRMnDw"
   },
   {
      id :  14,
      name : "C Pointers ",
      description : "Pointers & Array",
      videoUrl : "https://www.youtube.com/embed/LscgaBzlGdE"
   },
   {
      id :  16,
      name : "C Pointers",
      description : "Pointers & Functions",
      videoUrl : "https://www.youtube.com/embed/JYHpD9huNR4"
   },
   {
      id :  17,
      name : "C Pointers",
      description : "Memory Allocation",
      videoUrl : "https://www.youtube.com/embed/Dn87Bna23TQ"
  },
  {
      id :  18,
      name : " C Sturcture ",
      description : "C structure ",
      videoUrl : "https://www.youtube.com/embed/gt9YPl6O9ZM"
   },
   {
       id :  19,
       name : "C Pointers ",
       description : "Sturcture & Pointers",
       videoUrl : "https://www.youtube.com/embed/f0Uw1x8albM"
   },
   {
       id :  20,
       name : "C Pointers",
       description : "Structure & Functions",
       videoUrl : "https://www.youtube.com/embed/YeOC6ZCCo7A"
   },
  {
      id : 21,
      name : "C files",
      discrition : "File Input/Output",
      videoUrl : "https://www.youtube.com/embed/MQIF-WMUOL8"
  }
]
}
    return(
         <div>
            <span>{data.language[id].name}:</span>
            <h3> {data.language[id].description}</h3>
            {/* <Container>            */}
            <iframe width="560" height="315" src={data.language[id].videoUrl} title="YouTube video player" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            {/* </Container> */}
            <button onClick={() => navigate(`/quiz/${id}`)}>take a test</button>
         </div>
    )
 }
export default Video;
