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
      data-netlify-recaptcha="true" className='classRegistr' action="/thank-you">
        <input type="hidden" name="form-name" value="classRegistr" />
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="first" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>Class options</option>
      <option value="1">Online Class</option>
      <option value="2">In person</option>
      <option value="3">Group Class</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />
    </Form>

</motion.div>
    )
}

export default Register