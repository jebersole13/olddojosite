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
          <img src="manjifirstime.jpg" alt="manji" id='jonManji'  />
          <Carousel.Caption>
          <p>In Okinawa, learning the Manji Sai.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="odlschool.jpg" alt="school" id='testing2007'/>
          <Carousel.Caption>  
          <p>Testing graduation, 2007, Eastern College.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="olddays.jpg" alt="camp" id='campPhoto' />
          <Carousel.Caption>
          <p>Karate camp, dazzed and confused</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="raulcer.jpg" alt="camp" id='raulCer' />
          <Carousel.Caption>
          <p>After a promotion with a senior and a good friend.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="guyleandme.jpg" alt="camp" id='guyle' />
          <Carousel.Caption>
          <p>Photo with a friend gone, but not forgotten.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="kobunis.jpg" alt="camp" id='kobuNis' />
          <Carousel.Caption>
          <p>End of a Kobudo and Arnis camp.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  )
}

export default Pics
