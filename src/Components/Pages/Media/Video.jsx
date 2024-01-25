import React from 'react'
import { motion } from "framer-motion"

function Video() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Video'
    > 
    <h1>Videos</h1>
  {/**    https://www.geeksforgeeks.org/how-to-create-video-player-in-reactjs/ 
   * 
   * https://www.npmjs.com/package/react-video-js-player
   * 
   * add
  */}

   
    </motion.div>
  )
}

export default Video
