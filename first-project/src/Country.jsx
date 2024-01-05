

function Country(props){

    return(
        <div className="country">

            <h1>{props.name}</h1>
            <h2>{props.capital}</h2>
            <p>{props.pop}</p>

        </div>
    )
}

export default Country;