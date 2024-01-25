import {Fade, Slide} from "react-awesome-reveal";
import './Splash.css'

const Splash =()=> {
  return (
    <div className='Splash'>

   
  

<div className='elementToFadeInAndOut'>
  <Slide triggerOnce='true' direction="left">
  <Fade cascade triggerOnce='true'>
<p>古</p></Fade>
</Slide>
<Slide triggerOnce='true' direction="up">
<Fade cascade triggerOnce='true'>
      <p>手</p
      ></Fade></Slide>
      <Slide triggerOnce='true' direction="right" >
      <Fade cascade triggerOnce='true'>
      <p>館</p></Fade>
</Slide>
</div>
      
    
 <img src="newshisa.png" alt="shishi" id='shisasasa' />
     
      </div>
  )
}

export default Splash
