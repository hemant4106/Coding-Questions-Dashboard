import React from 'react'
import { NavLink } from 'react-router-dom'
import './../App.css'
function Navbar({id,isFirst,isLast}) {
  console.log(isFirst)
  console.log(isLast)
  return (
   <div className='Navbar'>

    <NavLink to={'/'} style={{fontSize:"40px"}}> Dashboard </NavLink>
    <div className='prevnext'>
      {!isFirst?<NavLink to={`/problem/${Number(id)-1}`}> <img className='prev' src="./../src/ICONS/prev.svg" alt="" /> Previous </NavLink>:""}
    {!isLast?<NavLink to={`/problem/${Number(id)+1}`}>  Next <img className='next' src="./../src/ICONS/next.svg" alt="" /> </NavLink>:""}
    
    </div> 
  
    
   </div>
  )
}

export default Navbar
