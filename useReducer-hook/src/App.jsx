import React from 'react'
import {useReducer } from 'react'

const App = () => {
  const initialState = {count:0};

  const reducer = (state,action)=>{
    switch(action.type){
      case 'increase':{
        return {count:state.count+1}
      }
      case 'decrease':{
        return {count:state.count-1}
      }
      case 'input':{
        return {count:action.payload}
      }
      default:{
        return state
      }
    }
   
  }
  const [state,dispatch]  = useReducer(reducer,initialState)
  
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type:'increase'})}>Increment</button>
      <button onClick={() => dispatch({type:'decrease'})}>Decrement</button>
      <br/>
      <input value={state.count} onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})} type="number" />
      
    </div>
  )
}

export default App

// useReducer hook return an array
// 2. useReducer hook accepts two arguments :
// -Reducer function
// -Initial state
// and this hook returns current state and Dispatch method inside an array
// 3. Reducer function specifies how the state gets updated.
