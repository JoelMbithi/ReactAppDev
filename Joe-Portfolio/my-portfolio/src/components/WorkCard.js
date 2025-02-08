import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom';

/**Props */

const WorkCard = ({imgsrc, title, text,view}) => {
  return (
    <div className='project-card'>
    <img src={imgsrc} alt='project '/>
     <h2 className='project-title'>
       {title}

     </h2> 
     <div className='project-details'>
         <p>{text}</p>
     </div>
     <div className='project-btn'>
         <NavLink to={view} className="btn">VIEW</NavLink>
          <NavLink to={view} className="btn">SOURCE</NavLink>  
   </div>
   </div>
  )
}

export default WorkCard
