import React,{useState} from 'react'
import {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Quiz.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function Quiz(){
    const navigate=useNavigate()
    let {id}=useParams();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);  
    const [repo,setRepo]=useState([])
    
    const getRepo=()=>{
    axios.get(`http://localhost:5000/quiz/${id}`)
    .then((response)=>{
      const myRepo=response.data;
      setRepo(myRepo)
    })
    }
    useEffect(()=>getRepo(),[])
    
    const handleAnswerOptionClick = (choice,answer) => {
      if (choice===answer) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < repo.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
    if(repo.length!==0){
    return (
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {repo.length}
            <button onClick={() => navigate(`/video/${++id}`)}> next topic: </button>
          </div>
  
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{repo.length}
              </div>
              <div className='question-text'>{repo[currentQuestion].question}</div>
            </div>
            <div className='answer-section'>
                <button onClick={() => handleAnswerOptionClick(repo[currentQuestion].choice1,repo[currentQuestion].answer_key)}>{repo[currentQuestion].choice1}</button>
                <button onClick={() => handleAnswerOptionClick(repo[currentQuestion].choice2,repo[currentQuestion].answer_key)}>{repo[currentQuestion].choice2}</button>
                <button onClick={() => handleAnswerOptionClick(repo[currentQuestion].choice3,repo[currentQuestion].answer_key)}>{repo[currentQuestion].choice3}</button>
                <button onClick={() => handleAnswerOptionClick(repo[currentQuestion].choice4,repo[currentQuestion].answer_key)}>{repo[currentQuestion].choice4}</button>
            </div>
          </>
        )
        }

      </div>
    );}
}

export default Quiz