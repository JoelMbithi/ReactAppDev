import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      < Navbar />
      <MainContent heading="ABOUT." text="Im a friendly Front-End Developer."/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About
