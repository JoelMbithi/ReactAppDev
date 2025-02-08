import React from 'react';
import Navbar from '../components/Navbar';
import DisplayImg from '../components/DisplayImg';
import Work from '../components/Work'
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <DisplayImg/>
      <Work/>
      <Footer />
    </div>
  )
}

export default Home
