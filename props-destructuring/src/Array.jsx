import UserComponent from "./User.jsx"

function CountryArray(){

    // const countries = ["Germany", "Canada", "Nigeria"]

    // For array with objects
    const users = [
        {
            username : "Joseph",
            city : "Lagos"
        },
        {
            username : "Kemi",
            city : "Uyo"
        },
        {
            username : "Tobe",
            city : "Awka"
        }
    ]

    return(
        // <div>
        //     {countries.map((country, index)=>(
        //         <h1 key={index}>{country}</h1>
        //     ))}
        // </div>

        <div>
            {users.map((user, index)=>(
                // <div key={index} className="container">
                //     <h1 className="h1">{user.username}</h1>
                //     <p className="p">{user.city}</p>
                // </div>

                <UserComponent username = {user.username} 
                city = {user.city} 
                key={index}/>
            ))}
        </div>
    )
}

export default CountryArray