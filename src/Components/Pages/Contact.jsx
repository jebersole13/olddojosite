import React from 'react'
import { motion } from "framer-motion"
import './Contact.css'
function Contact() {
  return ( 
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Contact' >
      <h1>Contact us!</h1>
      <form name='contact' method='POST' netlify onSubmit='submit'   
      data-netlify-recaptcha="true" className='contactForm' action="../Thanks">
        <div >
        <input type="hidden" name="form-name" value="contact" />
          <label className="form-label" htmlFor="firstName">
          First Name
          </label>
          <input className="form-control" type="text" name='firstName' required />
        </div>
        <div >
          <label className="form-label" htmlFor="lastName">
           Last Name
          </label>
          <input className="form-control" type="text" name='lastName' required />
        </div>
        <div >
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name="email" required />
        </div>
        <div >
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" name='message' required />
        </div>
        <button className="contactButton" type="submit">
       Submit
        </button>
      
    </form>
<br />
    <h6>We will get back to you within 48 hours of your message, if not sooner.</h6>
</motion.div>
  )
}

export default Contact
