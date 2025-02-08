import React from 'react'
import './Footer.css'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left-content'>
                <div className='location'>
                <FaHome size={20} style= {{color: '#fff' , marginRight: "2rem"}}/>
                <div>
                    <p>Chuka Town.</p>
                    <p>Kenya.</p>
                </div>
                </div>
                <div clasname="phone">
                    <h4>
                    <FaPhone size={20} style= {{color: '#fff' , marginRight: "2rem"}}/>
                    +254 &nbsp;743 &nbsp;861 &nbsp;565 &nbsp; or &nbsp; +254 &nbsp;740 &nbsp;196  &nbsp;027
                    </h4>
            
                </div>
                <div clssname = "email">
                    <h4>
                    <FaMailBulk size={20} style= {{color: '#fff' , marginRight: "2rem"}}/>
                    joellembithi@gmail.com
                    </h4>
                    
                </div>
            </div>
            <div className='right-content'>
                <h4>About the company</h4>
                <p>
                    We are a team of developers who are passionate about creating web applications that are user friendly and efficient. 
                    Our main goal is to create applications that will help you achieve your business goals.
                </p>
                <div className='socials'>
                    <FaFacebook size={30} style= {{color: '#fff' , marginRight: "2rem"}}/>
                    <FaInstagram size={30} style= {{color: '#fff' , marginRight: "2rem"}}/>
                    <FaTwitter size={30} style= {{color: '#fff' , marginRight: "2rem"}}/>
                    <FaLinkedin size={30} style= {{ color: '#fff', marginRight: '1rem'}}/>
                    <FaTiktok size={30} style= {{ color: '#fff', marginRight: '1rem'}}/>
                    <FaWhatsapp size={30} style= {{ color: '#fff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
