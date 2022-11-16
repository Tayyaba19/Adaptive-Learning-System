import React from 'react'
import Keywords from '../../components/keywords/keywords'
import {questions} from '../../components/metadata'
import  {useParams} from 'react-router-dom'

function Keywordspage() {
const { id} = useParams()


  return (
    <div>
 {
        {
          '0' : <Keywords questions={questions.variables}/>,
          '1' : <Keywords questions={questions.datatype}/>,
          '2' : <Keywords questions={questions.operators}/>,
          '3' : <Keywords questions={questions.ifelse}/>,
          '4' : <Keywords questions={questions.forloop}/>,
          '5' : <Keywords questions={questions.whileloop}/>

        }[id]
 }
    </div>
  )
}

export default Keywordspage