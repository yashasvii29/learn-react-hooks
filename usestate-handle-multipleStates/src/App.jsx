import React from 'react'
import { useState } from 'react';

const App = () => {
  // jab bhi react m multiple states means multiple variables ke sath kaam krna hai toh alag alag State nhi banayenge hum ek state object banayenge (like car object) aur uske andar sabhi states ko means sabhi vraibles ko define krenge as a key value pair and object ke andar jo key h uski value ko update krne ke liye spread operator ka use krenge inside setCar function
  // car object ke andar multiple states h means multiple variables toh object ke andar key ki value ko update krne ke liye spreadOperator ka use krenge
  const [car,setCar] = useState({
    brand:"Ferrari",
    model:"Roma",
    year:"2024",
    color:"red"
  });
  const changeColor = ()=>{
   
    // ...car se previous car object aayega
     // setcar function se car object ke andar color property and year property ki value ko change kr rhe hai
    setCar({...car,color:"blue",year:"2025"})
  }
  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
    </div>
  )
}

export default App