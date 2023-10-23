import React from 'react'
import{motion} from "framer-motion"
function Instructor() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Instructor'
    >

      <h3>Jon Ebersole</h3>
      <p>Jon Ebersole, born in Philadelphia,USA, now living in Gifu, Japan, has 20 years of martial arts experience.</p>
      <p>Primarily focused on Karate, with some Filipino Arnis, Taichi, and Kyudo experience as well, he is dedicated to continuing both martial arts training and facilitating the best classes possible for students. </p>
      <p>A teacher by trade, he integrates all of his experience for holistic, well rounded training.</p>
  
         <img src="demo.jpg" alt="demon" id='demo' />
         <img src="demo1.jpg" alt="stration" id='demo1' />
    </motion.div>
  )
}

export default Instructor
