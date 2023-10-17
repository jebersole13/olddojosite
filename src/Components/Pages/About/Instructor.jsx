import React from 'react'
import{motion} from "framer-motion"
function Instructor() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >

      <h3>Jon Ebersole</h3>
      <p>Jon Ebersole, born in Philadelphia,USA, now living in Gifu, Japan, has 20 years of martial arts experience.</p>
      <p>Primarily focused on Karate, with some Filipino Arnis, Taichi, and Kyudo experience as well, he is dedicated to continuing both martial arts training and facilitating the best classes possible for students. </p>
      <p>A teacher by trade, he integrates all of his experience into training for holistic, well rounded training.</p>
         <img src="olddays.jpg" alt="goodole" />
    </motion.div>
  )
}

export default Instructor
