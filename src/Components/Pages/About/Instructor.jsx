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

         <img src="olddays.jpg" alt="goodole" />
    </motion.div>
  )
}

export default Instructor
