import React from 'react'
import { useRef } from 'react';


const App = () => {
  const input=useRef();
  const btnClicked=()=>{
    console.log(input.current.value);
  }
  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App