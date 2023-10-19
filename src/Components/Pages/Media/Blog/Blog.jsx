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
      <h1>Blog</h1>
      <section>
        <p>This is a test</p>
      </section>
      <section>
        <p>Another test</p>
      </section>

      <section>
        <p>One more for good measure</p>
      </section>
    </motion.div>
  )
}

export default Blog
