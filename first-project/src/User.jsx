import { useState } from "react";

function User(props)
{

     let [name,setName] = useState("Aryan") //Creation of State Variable

    let[age,setAge] = useState(29);

    //let name="Aryan"; //point-1  State is data of component which you directly create inside the component
                        




    function ChangeName()
    {
        //  name="Thor";
        //   console.log("new name is" + name)

      //setName("Thor")
      setName(props.name);  // this line of code is exactly equal to name="Thor"
       
    }

    function changeAge(){
        // setAge(45);   // In this case we are hard coding the data
        setAge(props.age) //data come from props
    }

    function doSomething(planet){
        console.log("hello "+ planet);
    }

    

    return(
        <div className="User">
        <h1>{name}</h1>
        <h2>{age}</h2>


        <button onClick={ChangeName}>ChangeName</button>
        <button onClick={changeAge}>ChangeAge</button>
{/* 
        <button onClick={doSomething.bind(this,"mars")}>Do Something</button>  */}

        <button onClick={function(){     //this is 2nd solution => calling anonymous function 
            console.log("new func")
            doSomething("Mars");
        }}>Do Something</button> 


        </div>

    )

}

export default User;