import React from 'react'
import Table from 'react-bootstrap/Table';
import { motion } from "framer-motion"

function Schedule() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}

    className='Schedule'
    >
      <h1>Class Schedule</h1>
      <h3>Free online classes</h3>
      <h5>All classes are listed in Japan time. Please check your local time.</h5>
<br />
      <Table className='schedule' striped bordered hover >
      <thead>
        <tr>
          <th>Wednesday</th>
          <th>Friday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>6:00am-6:45am</td>
          <td>6:00am-6:45am</td>
          <td>Every 1st and 3rd Sunday of the month, depending on holidays.</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td> Basic Karate work out, emphasis on fundamentals, forms ,and sparring drills.</td>
          <td>Basic work out, focusing on fundamentals with a focus on cardio-fitness.</td>       
          <td>Integrated training with other Karate teachers, students, and people from around the world.</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h5>Please register for these classes <a href='./Register'>here</a> to receive link before class.</h5>
    <br />
    <h5>For in person personal or group lessons, please <a href='./Contact'>Contact</a> us for more information.</h5>
    </motion.div>
  )
}
export default Schedule