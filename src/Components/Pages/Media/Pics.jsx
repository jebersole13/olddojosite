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
      <Carousel>
        <Carousel.Item>
          <img src="manjifirstime.jpg" alt="manji" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>In Okinawa, learning the Manji Sai.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="odlschool.jpg" alt="school" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Testing graduation, 2007, Eastern College.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="odlschool.jpg" alt="old" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>When did this happen?</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  )
}

export default Pics
