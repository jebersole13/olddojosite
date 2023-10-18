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
    <p>Ryukyu Kempio is our dojo`s primary martial art.</p>
    <p>A form of Karate from Okinawa that focuses on practicality, fitness, and overall wellbeing.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/RNA_xS7zx5I?si=FYNaYC2VeFnl3ehT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </motion.div>
  )
}

export default Ryukyu
