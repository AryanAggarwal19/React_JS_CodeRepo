import { useState } from 'react'

import Compstate from './Compstate';

import './App.css'

function App() {

  // let[name,setName]= useState('');
  // let[email,setEmail] = useState('');

  let[details,setDetails]= useState({
    name:"",
    email:"",
    age:""
  });

  function handleInput(event)
  {
    console.log(event.target.value);
  }

// function handleName(event)
// {
//    setName(event.target.value);
// }

// function handleEmail(event)
// {
//   setEmail(event.target.value);
// }


  return(

  <>

  {/* <h1>{name}</h1>

  <h1>{email}</h1> */}


  <div className='data-form'>
  <input type="text" onChange={handleInput} placeholder="Enter name"  />

  <input type="text" onChange={handleInput} placeholder='Enter Email' />
  </div>


  </>
  )
}

export default App;
