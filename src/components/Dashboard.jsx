import useQuestions from "../hooks/useQuestions";
import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import ProblemDetail from "./ProblemDetail";
function Dashboard() {
  const { questions, loading, error } = useQuestions();
  // console.log(questions)
  return (
    <div>
      <div className="dashboardHeading">Coding Questions Dashboard</div>
      <div className="q">Questions</div>
      <ul className="qTitles">
{questions.map((item, index) => (<li key={index}><Link to={`/problem/${item.ID}`}>{item.title}</Link></li>))}
     {/* following list items are added for better presentation, ignore them */}
     <li><a>6.More will be updated soon..</a></li>
     <li><a>7.More will be updated soon..</a></li>
     <li><a>8.More will be updated soon..</a></li>
     <li><a>9.More will be updated soon..</a></li>
     <li><a>10.More will be updated soon..</a></li>
     <li><a>11.More will be updated soon..</a></li>
     <li><a>12.More will be updated soon..</a></li>
     <li><a>13.More will be updated soon..</a></li>
     <li><a>14.More will be updated soon..</a></li>
     <li><a>15.More will be updated soon..</a></li>
      </ul > 

    </div>
  )
}

export default Dashboard
