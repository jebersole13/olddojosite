import React from 'react'
import Table from 'react-bootstrap/Table';

function Schedule() {
  return (
    <div>
      <h1>Class Schedule</h1>
      <h3>Open free classes</h3>
      <h5>All classes are listed in JPN time. Please check your local time to check for attendance.</h5>

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
          <td>Otto</td>
       
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    <h5>For one on one or group lessons, please <a href='./Contact'>Contact</a> us for more information.</h5>
    </div>
  )
}

export default Schedule
