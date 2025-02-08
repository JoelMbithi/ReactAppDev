import { Link } from 'react-router-dom'
import React from './AboutContent.css'
import react from '../assets/react.jpg'
import react2 from '../assets/react2.jpg'
const AboutContent = () => {
  return (
    <div className='about'>
     <div className='about-left'>
     <h1>Who Am I?</h1>
     <p>Im a react front-end developer. I create responsive secure websites for my clients.</p>
      <Link to='/contacts'>
      <button className='btn'>contacts</button>
      </Link>
      
     </div>
     <div className='about-right'>
      <div className='img-container'>
        <div className='img-stack-top'>
          <img src={react} className='img' alt='true'/>
        </div>
        <div className='img-stack-bottom'>
            <img src={react2} className='img' alt='true'/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default AboutContent
