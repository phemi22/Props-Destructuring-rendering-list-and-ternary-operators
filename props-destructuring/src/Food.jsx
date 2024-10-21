function Food(){
    const food = [
        {
            nameOfFood : "Rice",
            origin : "Asia"
        },
        {
            nameOfFood : "Amala",
            origin : "Africa"
        }
    ]

    let amalaMessage = <h1>Yaay! Amala it is</h1>
    let riceMessage = <h1>Yaay! Rice it is</h1>
    let errorMessage = <h1>Wrong Food</h1>

    return(
        <div>
            <h2>Name of food and their origins</h2>
            {food.map((food, index)=>(
                <div key={index}><p>Food Name : {food.nameOfFood === "Amala"? amalaMessage : errorMessage}</p></div>
            ))}
        </div>
    )
}

export default Food