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
   <iframe width="560" height="315" src="https://www.youtube.com/embed/FEyNYgOiZko?si=u1gHRwQ2kiPQXjmP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gQRIjui98Do?si=JXf6SX3jbTGSPHn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/RNA_xS7zx5I?si=FYNaYC2VeFnl3ehT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A5wCd-gSJFU?si=zAbbRTr8ceeyTsTf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

   
    </motion.div>
  )
}

export default Video
