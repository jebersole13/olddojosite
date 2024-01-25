import React from 'react'
import { motion } from "framer-motion"
import Splash from './Components/Splash'
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

<Splash/>
      </motion.div>
  )
}

export default Home
