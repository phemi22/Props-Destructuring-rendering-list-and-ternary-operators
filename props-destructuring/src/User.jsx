function UserComponent({username, city}){
    return(
        <div className="user-container">
            <h1>{username}</h1>
            <p>{city}</p>
        </div>
    )
}

export default UserComponent