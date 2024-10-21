import Destructuring from "./Destructuring.jsx"
import Object from "./Object.jsx"
import CountryArray from "./Array.jsx"
import Food from "./Food.jsx"

function App() {

  // To pass in object literals as props
  const cardetails = {
    name : "Benz",
    color : "Black",
    year : 2021
  }

  return (
   <div>
    <Destructuring 
    name = "Toyota"
    color = "Black"
    year = {2009}
    />

    <Object 
    carDetails = {cardetails}
    />

    <CountryArray 
    
    />

    <Food />
   </div>
  )
}

export default App
