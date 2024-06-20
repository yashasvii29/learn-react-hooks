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



// cleanup function run between two rendering
   
    // useref m rerendering nhi hoti but usestate m htoi hai 
    // useREf can hold the state and useState can't
    // useref can manipulate the dom
    // useref and usestate both can do the state management
    // custom hooks always satrt with use and we can use customHooks inside the prebuilt hooks
    // in functional components we see the lifecycle with the useEffect hook
    // in lifecycle....component did mount
    // component did update
    // component will unmount