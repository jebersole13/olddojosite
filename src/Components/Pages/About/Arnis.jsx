import React from 'react'
import {motion} from 'framer-motion'
function Arnis() {
  return (
    <motion.div
    initial={{ opacity: 0,  }}
    animate={{ opacity: 1,  }}
    transition={{ duration: 0.5 }}
    >
      <h1>Filipino Arnis</h1>
      <p>Though not an Okinawan Martial Art,Arnis is apart of our curriculum.</p>
      <p>It has many compatiable and identical principals both with the Ryukyu Kempo and the Kobudo we practice.</p>
      <p>Practicing Arnis can be taken as a separate martial art entirely, or as a compliment to the Karate studied.</p>
      <p>Grab a stick and give it a try.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FEyNYgOiZko?si=u1gHRwQ2kiPQXjmP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </motion.div>
  )
}

export default Arnis
