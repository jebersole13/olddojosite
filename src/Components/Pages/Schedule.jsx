import React from 'react'
import Table from 'react-bootstrap/Table';
import { motion } from "framer-motion"

function Schedule() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <h1>Class Schedule</h1>
      <h3>Open free zoom classes</h3>
      <h5>All classes are listed in JPN time. Please check your local time.</h5>

      <Table striped bordered hover>
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
    </Table>

    <h5>For one on one or group lessons, please <a href='./Contact'>Contact</a> us for more information.</h5>
    </motion.div>
  )
}

export default Schedule
