import Product from "./Product"
import "./App.css"
import User from "./User"


function App() {
  

  return (
<div>
   <h1>Main Component</h1>

   {/* <Product name="Iphone 14" price="20000" specs={{ram:"2gb",size:"19cm"}} category={["Electronics","Mobile"]}/>

   <Product name="Samsung 21" price="45000" specs={{ram:"4gb",size:"21cm"}}  category={["Electronics","Mobile"]}/>
   */}

    <User name="Rahul" age={26}/> 
   

</div>
)}


export default App
