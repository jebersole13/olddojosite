import React from 'react'
import { motion } from "framer-motion"
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

function Blog() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 30, delay: 15 });
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='Blog'
    ref={scrollRef}
    > 
         <h1>Training Blog</h1>
   {/* <div className="blog" ref={scrollRef}>
    <header className="blog-header">
     <h3>One more time</h3>
    <img src="modelmaki.jpg" alt="maki" className='blogimg' />
    <p id='date'> <i>2023/11/3</i></p>
      <p>
‘One more time!’ is a phrase people like to say, but often don’t like to hear. It’s easy to ask  to do something one more time, but if we are asked to do something again and again, most people don’t want to hear this
</p>
<p>I certainly have felt this every time I was asked to do something again. Do kata again and again, despite feeling like I knew it. Keep doing a basic technique I felt like I was already good at. Do a drill I had already drilled a million times before.
</p>
<p>It is natural to not want to do something again and again. </p>
<p>But as the saying goes, repetition is the mother of mastery. 
</p>
<p>Every skill, physical or otherwise, requires repetition. Even when you feel like you have mastered something, it is just as easy to lose skill in one area if it is not consistently drilled and honed. And every time you practice, you should bring the experiences from before, and the experiences in between each time you train to the table. 
</p>
<p>You had a great day at work? Bring that energy to getting better.
</p>
<p>Had a bad break up? Use the practice to stay on a positive path through a hard time.
</p>
<p>Nothing much happening? Great, use the practice to liven things up. 
</p>
<p>Tired of practicing? Take a break. But have a good idea for how long you will be taking off.
</p>
<p>Doing the same thing, again and again, to get better and better each time. 
</p>
<p>Writing this, I think about how many times I was frustrated with doing the same thing again and again, and simply gave up on consistent practice.</p>
<p>
But every time I go back to practicing the same thing, the same kata, the same technique, and the drill, I think ‘If I hadn’t stopped before, I wonder how much better I would be now.’ 
</p>
<p>I say this in the light of having been away from Karate teaching for some time, despite being as active as one can be without any students or being a student in a dojo. 
</p>
<p>Teaching, like any other practice, is a skill that requires constant repetition. Not just saying the words ‘One more time’ but doing something again and again.
</p>
<p>So here we go, one more time. </p>

    </header>
   
  </div>
 */}


<h1>Coming soon</h1>
    </motion.div>
  )
}

export default Blog
