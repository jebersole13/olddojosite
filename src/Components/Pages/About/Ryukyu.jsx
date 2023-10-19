import React from 'react'
import {motion} from "framer-motion"
function Ryukyu() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Ryukyu'
    >

    <h1>Ryukyu Kempo</h1>
    <h1>琉球拳法</h1>
  
    <p>Ryukyu Kempio is our dojo`s primary martial art.
      A form of Karate from Okinawa that focuses on practicality, fitness, and overall wellbeing.
      Mixing aspects of full contact fighting, old school
    </p>
     <img src="odlschool.jpg" alt="friends" />
    </motion.div>
  )
}

export default Ryukyu
