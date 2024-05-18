import React from 'react'
import { useState } from 'react';

const App = () => {
  const [color,setColor]=useState("Red");
  // let color = "Red";
  const changeColor = ()=>{
    setColor("Blue")
    console.log("blue");
  }
  return (
    <div>
      <h1>My favourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </div>
  )
}

export default App