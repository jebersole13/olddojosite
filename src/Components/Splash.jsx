import React from 'react'
import {Fade,Slide} from 'react-awesome-reveal'
import './Splash.css'
function Splash() {
  return (
    <div className='splash'>
    <div className='elementToFadeInAndOut'>
      
  <Slide triggerOnce='true' direction="left">
  <Fade cascade triggerOnce='true'>
<h1 id='kanji'>古 </h1></Fade>
</Slide>
<Slide triggerOnce='true' direction="up">
<Fade cascade triggerOnce='true'>
      <h1 id='kanji'>手</h1 ></Fade></Slide>
      <Slide triggerOnce='true' direction="right" >
      <Fade cascade triggerOnce='true'>
      <h1 id='kanji'>館</h1></Fade>

</Slide>

     
    </div>
    
 <img src="newshisa.png" alt="shishi" id='shisasasa' />
    </div>
  )
}

export default Splash
