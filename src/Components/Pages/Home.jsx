import React from 'react'
import { motion } from "framer-motion"
function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
    <h1>Welcome!</h1>  

      <img src="shisap.png" alt="shishi" />
      </motion.div>
  )
}

export default Home
