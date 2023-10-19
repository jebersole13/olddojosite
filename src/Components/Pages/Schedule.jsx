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
      <h3>Open free zoom classes</h3>
      <h5>All classes are listed in Japan time. Check your local time.</h5>

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
          <td> Basic Karate work out, emphasis on fundamentals, depending on particpants, forms and sparring basics.</td>
          <td>Basic work out, focusing on fundamentals with a focus on cardio-fitenss, and some crosstraining.</td>       
          <td>Integrated training with other Karate teachers, students, and people from around with the world.</td>
        </tr>
      </tbody>
    </Table>

    <h5>For one on one or group lessons, please <a href='./Contact'>Contact</a> us for more information.</h5>
    </motion.div>
  )
}

export default Schedule
