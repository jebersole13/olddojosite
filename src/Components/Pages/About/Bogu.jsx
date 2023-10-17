import React from 'react'
import {motion} from 'framer-motion'
function Bogu() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A5wCd-gSJFU?si=zAbbRTr8ceeyTsTf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </motion.div>
  )
}

export default Bogu
