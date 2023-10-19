import React from 'react'
import { motion } from "framer-motion"

function Blog() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Blog'
    >
      <h5>Star date 5414</h5>
      <p>We've stopped by the Riasa system and are investigating what happened to Jordy</p>
    </motion.div>
  )
}

export default Blog
