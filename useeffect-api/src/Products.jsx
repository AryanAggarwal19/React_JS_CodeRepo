import { useEffect, useState } from "react";


function Products(){

    // let [name,setName]= useState("Iphone 14")
    // let [price,setPrice]= useState("80,000")
    
    // 0. UseEffect is a function which is called based on the lifecycle of a component
    // 1. By default useEffect is called for every render and rerender
    // 2. if u pass a 2nd parameter as a blank array it will only be called for first render/mounting
    // 3. []=> dependency Array
    // 4. why it is called dependency array? bcz inside this[] u can pass dependencies(variable)
    // 5. if u pass variables in dependency array- useEffect will still be called for first render but now,
    //    it will also be called if the (value) of variable in the dependency array changes.
    // 6. You can have multiple useEffects in a single component.




    //   useEffect(()=>{
    //     console.log("Component Mounted");

    //     return ()=>{
    //         console.log("Component gone");
    //     }
    //   },[price])

    let[products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setProducts(data);
            })
            .catch((err)=>{
                console.log(err);
            })

    },[])


    return(
        <div className="products">
        {/* <h1>{name}</h1>
        <h2>{price}</h2>

        <button onClick={()=>{
            setName("SamSung M51")
        }}>Change Name</button>

        <button onClick={()=>{
            setPrice(140000)
        }}>Change Price</button> */}

        {
            products.map((product)=>{

                return (
                    <div className="product">
                    <img className="p-image" src={product.image} alt="product" />
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    </div>
                )

            })
        }

        </div>
    )
}

export default Products;