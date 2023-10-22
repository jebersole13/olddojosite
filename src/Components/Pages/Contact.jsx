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
      <form name='contact' method='POST' data-netlify='true' onSubmit='submit'>
   
        <div >
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div >
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input className="form-control" type="phone" id="phone" required />
        </div>
        <div >
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div >
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
        
        </button>
      
    </form>
<br />
    <h6>We will get back to you within 48 hours of your message, if not sooner.</h6>
</motion.div>
  )
}

export default Contact
