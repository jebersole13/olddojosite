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

      <p>Old weapons training or Kobudo, is part of our school's curriculum. 
      We study both connection between empty hand and weapon techniques, and the practical techniques of the weapons themselves.</p>
    <img src="sai.jpg" alt="saing" id='saing' />
    <img src="kobudo.jpg" alt="maceplusmar" id='maceplumar' />
    </motion.div>
  )
}

export default Kobudo
