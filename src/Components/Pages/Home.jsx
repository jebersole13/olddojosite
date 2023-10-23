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
    <h1>Welcome to our Dojo!</h1>  
<h3>Serving Gifu prefecture, with personal, group, and online classes.</h3>


 <img src="newshisa.png" alt="shishi" id='shisasasa' />
     
      </motion.div>
  )
}

export default Home
