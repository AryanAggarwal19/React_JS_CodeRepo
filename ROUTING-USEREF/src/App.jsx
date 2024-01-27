import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Products'
import Service from './components/Service'

function App() {

  //for now i'm writing routing logic inside app component
  return(
    <>

    
    <BrowserRouter>

    <Header/>

    

    <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/service' element={<Service/>}/>




    </Routes>





    </BrowserRouter>
    
  
    

    </>
  )
}

export default App;
