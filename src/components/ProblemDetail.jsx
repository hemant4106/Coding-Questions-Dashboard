import React from 'react'
import useQuestions from '../hooks/useQuestions'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
function ProblemDetail() {
   const { id } = useParams();
   const{questions , loading ,error}=useQuestions();
   const isFirst= Number(id)===1;
   const isLast= Number(id)===questions.length;
  console.log((id))
  return (
    <div>
      <Navbar isFirst={isFirst} isLast={isLast} id={id} />
     <div><h1>{questions[id-1]?.title}</h1></div> 
     <div><h3>DESCRIPTION: {questions[id-1]?.description}</h3></div> 
     <div>TEST CASES{questions[id-1]?.test_cases.map((item,index)=>(<pre>{item}</pre>))}</div> 
     <div>OUTPUT{questions[id-1]?.output.map((item)=>(<pre>{item}</pre>))}</div> 
     <div>SUBMIT TEST CASES{questions[id-1]?.submit_test_cases.map((item)=>(<pre>{item}</pre>))}</div> 
     <div>SUBMIT OUTPUT{questions[id-1]?.submit_output.map((item)=>(<pre>{item}</pre>))}</div> 
    </div>
  )
}

export default ProblemDetail
