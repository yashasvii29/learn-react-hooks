import React from 'react'
import { createContext } from 'react'
// first step -  creating the context
// second step in main.jsx file

 export const AppContext = createContext();
 
 const ContextProvider = (props)=>{
    const phone = "123456789"
    const name = "yashasvi"
    // we have multiple values so hum value m object assign krenge
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
 }

export default ContextProvider

//we can pass any number of data..we can pass the variables , functions , state variables or any data so this is how we can use the useContext hook to manage the global data