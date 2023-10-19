import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion"

function Pics() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Pics'
    >
      <h1>Pictures</h1>
      <Carousel>
        <Carousel.Item>
          <img src="manjifirstime.jpg" alt="manji" max-width='1000' max-height='800' />
          <Carousel.Caption>
          <p>In Okinawa, learning the Manji Sai.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="odlschool.jpg" alt="school" max-width='1000' max-height='800'/>
          <Carousel.Caption>  
          <p>Testing graduation, 2007, Eastern College.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="olddays.jpg" alt="camp" max-width='1000' max-height='800'/>
          <Carousel.Caption>
          <p>Karate camp, dazzed and confused</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  )
}

export default Pics
