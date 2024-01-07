

import './App.css'
import Products from './Products';
import { useState } from 'react';




  function App(){

    let [showProduct,setShowProduct] = useState(true);


  return (
    <>
      <h1>All Products</h1>

       <button onClick={()=>{
        setShowProduct(true)
      }}>Show</button> 

      <button onClick={()=>{
        setShowProduct(false)
      }}>Hide</button>

     {
      showProduct===true?(<Products/>):
      (
        <h1>Product not Available</h1>
      )
     }
    </>
  )
  }

export default App;
