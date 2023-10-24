import React from 'react'
import {motion} from 'framer-motion'
function Arnis() {
  return (
    <motion.div
    initial={{ opacity: 0,  }}
    animate={{ opacity: 1,  }}
    transition={{ duration: 0.5 }}
    className='Arnis'
    >
      <h1>Filipino Arnis</h1>
      <p>Arnis is a Filipnio Martial art focused on the use of the baton,sword,knife,and empty hand.
      Though not an Okinawan Martial Art, Arnis is a part of our curriculum. It has many compatiable and identical principals both with the Ryukyu Kempo and the Kobudo we practice.
      Practicing Arnis can be taken as a separate martial art entirely, or as a compliment to Karate.</p>
      <p>Grab a stick and give it a try.</p>

      <img src="arnisSticks.jpg" alt="kali" id='eskrima' />
     
    </motion.div>
  )
}

export default Arnis
