import React from 'react'
import {useReducer } from 'react'

const App = () => {
  const initialState = {count:0};

  const reducer = 
  const [state,dispatch]  = useReducer(reducer,initialState)
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev=>prev+1)}>Increment</button>
      <button onClick={() => setCount(prev=>prev-1)}>Decrement</button>
      
    </div>
  )
}

export default App