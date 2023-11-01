import React from 'react'
import { motion } from "framer-motion"
import { fullpageApi } from '@fullpage/react-fullpage'
function Blog() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Blog'
    >
      <h1>Blog</h1>

    </motion.div>
  )
}

export default Blog
