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
      <p>As part of our Karate curriculum, we include full contact, protected sparring called Bogu Kumite.  Bogu kumite is a practice that gives students real feeling of hard, fast fighting in the safest way possible.
      Though intimidating at first, this is a skill that tests, refines, and perfects the basics learned from day one.</p>
      <p>Lets gear up and go!</p>
 <img src="bogu.jpg" alt="bogu" />
 <img src="kumite.jpg" alt="kumite" />
    </motion.div>
  )
}

export default Bogu
