// import Product from "./Product"
import "./App.css"
// import User from "./User"
import Country from "./Country"
import { useState } from "react"


function App() {
  
  //UNDERSTANDING CONDITIONAL RENDERING

  let [isLoggedIn,setIsLoggedIn]= useState(true)



 
  //Understanding Components using loop

  let [countries,setCountries]= useState( 
    [
    {name:"India",capital:"New Delhi",pop:"1.4B"}, //Array of Objects
    {name:"Australia",capital:"Canberra",pop:"330M"},
    {name:"France",capital:"Paris",pop:"67.5M"}
  ]
  ) 

 function loadNewCountries()
 {  
  setCountries([
    {name:"USA",capital:"Washington DC",pop:"1.4B"}, 
    {name:"Sri Lanka",capital:"Colombo",pop:"330M"},
    {name:"UAE",capital:"Dubai",pop:"67.5M"}
  ])
 }







  

  return (
<div>
   <h1>Main Component</h1>

  {
     
     isLoggedIn==false?(<h1>Please logIN</h1>):
     countries.map((country)=>{
    
    return (
     <Country name={country.name} capital={country.capital} pop={country.pop}/>
    )
 })


  }





   
   <button onClick={loadNewCountries}>Load New Countries</button> 


   {/* <Product name="Iphone 14" price="20000" specs={{ram:"2gb",size:"19cm"}} category={["Electronics","Mobile"]}/>

   <Product name="Samsung 21" price="45000" specs={{ram:"4gb",size:"21cm"}}  category={["Electronics","Mobile"]}/>
   */}

  {/* <User name="Rahul" age={26}/> */}



  {/* <country name={countries[0].name} capital={countries[0].capital} pop={countries[0].pop}/>

  <Country name={countries[1].name} capital={countries[1].capital} pop={countries[1].pop}/>C */}


{/* {
  countries.map((country)=>{
    
     return (
      <Country name={country.name} capital={country.capital} pop={country.pop}/>
     )
  })

} */}

  
   

</div>
)}


export default App
