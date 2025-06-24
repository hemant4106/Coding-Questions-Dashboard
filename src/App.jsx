import { useState } from 'react'
import Dashboard from './components/Dashboard'
import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes,Link,BrowserRouter } from 'react-router-dom'
import ProblemDetail from './components/ProblemDetail'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Dashboard/>}/>
         <Route path="/problem/:id" element={<ProblemDetail/>} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
