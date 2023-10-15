import React from 'react'
import Table from 'react-bootstrap/Table';

function Schedule() {
  return (
    <div>
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
    </div>
  )
}

export default Schedule
