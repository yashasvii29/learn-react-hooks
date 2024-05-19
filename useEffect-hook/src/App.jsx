import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [count,setCount] = useState(0);
  const [name,setName]=useState('yashasvi');
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count=>count+1);
    },2000)
  },[count])
  // dependency array m count pass kiya h toh jab bhi count ki value change hogi toh callback fun chalega and count ki value will increase after 2 secs
  // we can pass multiple states or variables inside the dependency array
  return (
    <div>
      <h1>I have rendered {count} times</h1>
    </div>
  )
}
// count ki value direct 0 se 2 ho rhi hai because of React.strictMode in main.jsx toh iss problem ko solve krne ke liye we will comment it i main.jsx file..only in that case


export default App