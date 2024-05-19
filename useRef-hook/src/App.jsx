import React from 'react'
import { useEffect } from 'react';
import { useState ,useRef} from 'react'

const App = () => {
  const [value,setValue] = useState(0);
  const count=useRef(0);
  // useRef hook returns an object which has current property means count is an object and count has current property and we will use count.current to access the value and inside that current property we assign a value to it
  console.log(count);
  useEffect(()=>{
    count.current=count.current+1;
  })
  return (
    <div>
      <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
      <h1>render count:{count.current} </h1>
    </div>
  )
}

export default App