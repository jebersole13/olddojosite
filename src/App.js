import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {AnimatePresence} from 'framer-motion'
import{Routes, Route,useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Schedule from './Components/Pages/Schedule';
import Arnis from './Components/Pages/About/Arnis';
import Bogu from './Components/Pages/About/Bogu';
import Instructor from './Components/Pages/About/Instructor';
import Kobudo from './Components/Pages/About/Kobudo';
import Ryukyu from './Components/Pages/About/Ryukyu';
import Blog from './Components/Pages/Media/Blog';
import Pics from './Components/Pages/Media/Pics';
import Video from './Components/Pages/Media/Video';
import Error from './Components/Pages/Error';
import Register from './Components/Pages/Register';
import Thanks from './Components/Pages/Thanks';
import Splash from './Components/Pages/Splash'
import './index.css';



function App() {
  const location= useLocation();
  return (
    <div className="App">
     <Navbar/>
     <AnimatePresence>
     <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Schedule' element={<Schedule/>}/>
    <Route path='/Arnis' element={<Arnis/>}/>
    <Route path ='/Bogu' element={<Bogu/>}/>
    <Route path ='/Instructor' element={<Instructor/>}/>
    <Route path ='/Kobudo' element={<Kobudo/>}/>
    <Route path ='/Ryukyu' element={<Ryukyu/>}/>
    <Route path = '/Blog' element={<Blog/>}/>
    <Route path='/Pics' element={<Pics/>}/>
    <Route path ='/Video' element={<Video/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Thanks' element={<Thanks/>}/>
    <Route path='/Splash' element={<Splash/>}/>
    <Route path="*" element={<Error/>}/>
     </Routes>
     </AnimatePresence>
    <Footer/>
    </div>
  );
}

export default App;
