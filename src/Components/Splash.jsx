

import './Splash.css'

const Splash =()=> {
  return (
    <div className='Splash'>

   
  
    <h1>Welcome to our Dojo!</h1>  
<h3>Serving Gifu prefecture, with personal, group, and online classes.</h3>

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
