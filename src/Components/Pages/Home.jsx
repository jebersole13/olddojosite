import React from 'react'
import { motion } from "framer-motion"
function Home() {
  return (
    <motion.div
    initial={{ opacity: 0.2 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}

    className='Home'
    >
    <h1>Welcome!</h1>  

      <img src="shisap.png" alt="shishi" id='shisasasa' />
      </motion.div>
  )
}

export default Home
