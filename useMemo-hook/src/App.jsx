import React from 'react'
import { useState,useMemo } from 'react';

const App = () => {
  const [number,setNumber] = useState(0);
  const [counter,setCounter] = useState(0);

  function cubeNum(num){
    console.log('calculation done');
    return Math.pow(num,3);
  }
  const result = useMemo(()=> cubeNum(number),[number]);
  // input m number ko change krenge toh number state m means dependency array m change hoga and callback function chalega then cubeNum function call hoga and result ki value update ho jayegi
  // useMemo hook accepts two parameters callback function and dependency array
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <h1>cube of the number:{result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </div>
  )
}
// when to use useMemo hook
// jab ek state ko change krne se dusri state m change aaye and hum nhi chahte ki ek state m change krne se dusri state m change aaye uss case m we will use useMemo hook so dusri state ko means uss variable ko dependency array m pass krenge and callback function m change (means logic) pass krenge toh y callback function tabhi chalega jab dependency array m change aayega jab uss variable ki value means state m update hoga
// jab hum counter state ko update krenge toh component rerender hoga but isse cube of the number pr koi effect nhi padega result m tabhi change aayega jab number state ko update krenge jab dependency array m change aayega

export default App