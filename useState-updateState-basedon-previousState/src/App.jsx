import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count,setCount]=useState(0);

  const increaseCount = ()=>{
    // setCount(count+1); // 0+1=1
    // setCount(count+1); //0+1=1
    // setCount(count+1); //0+1=1
    // setCount(count+1); //0+1=1

    // count ko direct 4 se increase krna h to prev state ka use krenge means update state based on previous state
    setCount(prev=>prev+1); //0+1=1
    setCount(prev=>prev+1);//1+1=2
    setCount(prev=>prev+1);//2+1=3
    setCount(prev=>prev+1);//3+1=4
    // prev variable ke place pr kisi aur variable ka bhi use kr sakte h....count var ka bhi but prev use krne se y pata chal jata h ki prev state means var ko update kr rhe h
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </div>
  )
}

export default App