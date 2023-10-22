import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      <Form className='contactForm' >
        <input type="hidden" name='form-name' value='contact' />
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name  </Form.Label>
        <Form.Control type="name" placeholder="First name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Last Name </Form.Label>
        <Form.Control type="name" placeholder="Last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Please write your message here."/>
      </Form.Group>
      <Button className='contactButton' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </form>
<br />
    <h6>We will get back to you within 48 hours of your message, if not sooner.</h6>
</motion.div>
  )
}

export default Contact
