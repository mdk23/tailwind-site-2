
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Footer from './components/Footer';

import Home from './pages/index';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact'
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import Content from './components/Content';

function App() {
  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
     setIsOpen(!isOpen);
  }

  return (
       <BrowserRouter>
            <Navbar toggle={toggle}/>
             <Dropdown isOpen={isOpen} toggle={toggle}/> 
              <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/menu' element={<Menu/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/content' element={<Content/>}/>
               </Routes>  
            <Footer/>
       </BrowserRouter>
              
  );
}

export default App;
