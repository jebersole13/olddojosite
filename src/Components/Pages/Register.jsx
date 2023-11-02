import { motion } from "framer-motion"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Register(){
    return(
<motion.div
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5 }}
>
    <h1>Class Registration</h1>
    <Form name='classRegistr' method='POST' netlify onSubmit='submit'   
      data-netlify-recaptcha="true" className='classRegistr' id='register' action="../Thanks">
        <input type="hidden" name="form-name" value="classRegistr" />
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name='firstName'required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name='lastName' required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" name='email' required/>
      </Form.Group>
      <Form.Select aria-label="Default select example" name='selection' required>
      <option>Class options</option>
      <option value="Online">Online Class</option>
      <option value="In Person">In person</option>
      <option value="Group">Group Class</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name='message' required/>
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />
    </Form>

</motion.div>
    )
}

export default Register