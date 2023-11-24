import React from 'react'
import { motion } from "framer-motion"
function Splash() {
  return (
    <motion.div
    initial={{ opacity: 0.2 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}

    className='Splash'
    >
    <h1>Welcome to our Dojo!</h1>  
<h3>Serving Gifu prefecture, with personal, group, and online classes.</h3>

<Fade>
      <p>古武道</p>
      <p>空手</p>
      <p>館</p>
    </Fade>
 <img src="newshisa.png" alt="shishi" id='shisasasa' />
     
      </motion.div>
  )
}

export default Splash
