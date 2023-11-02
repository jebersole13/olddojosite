import React from 'react'
import { motion } from "framer-motion"
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

function Blog() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20, delay: 10 });
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Blog'
    ref={scrollRef}
    > 
         <h1>Training Blog</h1>
    <div className="blog" ref={scrollRef}>
    <header className="blog-header">
     <h3>One more time</h3>
    <img src="modelmaki.jpg" alt="maki" className='blogimg' />
    <p></p>
      
    </header>
   
  </div>
 



    </motion.div>
  )
}

export default Blog
