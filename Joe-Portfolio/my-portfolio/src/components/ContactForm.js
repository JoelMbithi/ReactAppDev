import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' name='name' required />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='subject'>Subject</label>
        <input type='text' id='subject' name='subject' required />

        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' rows='6' placeholder='Type your message here' required></textarea>

        <button type='submit' className='btn'>SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
