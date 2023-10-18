import React from 'react'
import {motion} from 'framer-motion'
function Bogu() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Bogu'
    >
      <h1>Bogu Kumite</h1>
      <h2>防具組み手</h2>
      <p>As part of our Karate curriculum, we include full contact, protected sparring, or Bogu Kumite in Japanese.</p>
      <p>Bogu kumite is a practice that gives students real feeling of hard, fast fighting in the savest way possible.</p>
      <p>Though it can be intimidating at first, this is a skill that tests, refines, and perfects the basics learned from day one.</p>
      <p>Gear up and go!</p>
 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A5wCd-gSJFU?si=zAbbRTr8ceeyTsTf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </motion.div>
  )
}

export default Bogu
