import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import ContactForm from '../components/ContactForm'

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <MainContent heading="CONTACTS." text="You can reach me at my social media platforms."/>
      <ContactForm/>
      <Footer />
    </div>
  )
}

export default Contacts
