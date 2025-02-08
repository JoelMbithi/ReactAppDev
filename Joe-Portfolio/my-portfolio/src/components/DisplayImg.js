import React from 'react'
import './DisplayImg.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';


const DisplayImg = () => {
  return (
    <div className="display-img">
        < div className="intro-container">
         <img className='intro-img' src={IntroImg} alt='IntroImg'/>
        </div>
      
      <div className='content'>
        <p>HI,I'M JOE.</p>
        <h1>Frontend Developer</h1>
        <Link to="/projects" className='btn'>Projects</Link>
        <Link to="/contacts" className="btn btn-light">Contacts</Link>
        
      </div>
     
    </div>
  )
}

export default DisplayImg
