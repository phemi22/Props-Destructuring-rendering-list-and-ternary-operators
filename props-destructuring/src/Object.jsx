function Object({carDetails}){

    return(
        <div>
            <h1>The name of the car is {carDetails.name}</h1>
            <p>The color of the car is {carDetails.color}</p>
            <p>The car was made in the year {carDetails.year}</p>
        </div>
    )
}

export default Object