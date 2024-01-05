


function Product(props)
{
     console.log(props);

    //  let{name,price,specs,category}= props;  =>Destructuring

    let n= "Thor";

    return(
        <div className="product">

            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <h4>{props.specs.ram}</h4>
            <span>{props.specs.size}</span>
            <h1>{props.category[0]}</h1>

        </div>
    )
}

export default Product;