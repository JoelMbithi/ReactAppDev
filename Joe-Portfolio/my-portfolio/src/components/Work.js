import React from 'react'
import './WorkCard.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData' 

/**calling the props from the WordCardData */
const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      
      <div className='project-container'>
        
       {WorkCardData.map((value,index) =>{
        return (
          <WorkCard 
          key={(index)}
          imgsrc={value.imgsrc}
          title={value.text}
          text={value.text}
          view={value.view}
          />
        )
       })}
      </div>
    </div>
  )
}

export default Work
