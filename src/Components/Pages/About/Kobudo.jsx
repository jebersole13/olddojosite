import React from 'react'
import {motion} from 'framer-motion'
function Kobudo() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Kobudo'
    >

      <h1>Kobudo</h1>
      <h1>古武道</h1>

      <p>Old Weapons training or Kobudo as it is referred to in Japanese, is part of our curriculum. </p>
      <p>There is a significant connection between empty hand and weapon techniques, so Kobudo fits well with study, as well as blended with Filipino Arnis </p>
     <img src="manji.jpg" alt="manji" />
    </motion.div>
  )
}

export default Kobudo
