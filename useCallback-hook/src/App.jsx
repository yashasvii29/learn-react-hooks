import React from 'react'
import { useState,useCallback } from 'react'
import Header from './components/Header';

const App = () => {
  const [count,setCount]=useState(0);

  const newFun = useCallback(()=>{},[]);
  // const newFun = ()=>{}
  return (
    <div>
        <Header newFun={newFun}/>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(prev=>prev+1)}}>click</button>
    </div>
  )
}

export default App
// useCallback hook accept two parameters callback function and dependency array
// jab state ko update krenge toh app component rerender hoga and uske andar header component bhi rendered ho rha h but header component m koi change nhi kiya but still header component is rendering and hum nhi chahte state ko update krne pr header component render ho so we will use memo() of react ...hum uss component ko memo() m wrap kr denge in header component
// humne header component m newFun ko pass kiya hai as a props but jab hum state ko update krenge toh app component rerender hoga and header component render hoga without any change in the props because jab bhi app component rerender hoga toh ek new newFun banega and props m change hoga isliye header component render ho rha h without any change but hum nhi chahte state ko update krne pr header component render ho without any change in the props so in that case we will use useCallback hook uss newFun m useCallback hook ko assign krenge...so useCallback hook will not create another function(newFun) it will use cached function whenever it will create this function first time and it will catch that function in the memory and whenever rerenders happen it will use that cached function so the function will be same and when the function is same so this header props will be same there is no changes in this header props so when the props is not changing then header will not rendered again