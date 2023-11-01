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
      <h1>Training Blog</h1>
<section>
    <h3>Here we go again..</h3>
    <img src="modelmaki.jpg" alt="maki" className='blogimg' />
    <p></p>
</section>
    </motion.div>
  )
}

export default Blog
