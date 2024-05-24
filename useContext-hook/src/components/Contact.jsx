import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Contact = () => {
    // thirs step-consuming the context
      
    const {phone,name} = useContext(AppContext);
  return (
    <div>
        <h2>Contact</h2>
        <h3>Phone :{phone}</h3>
        <h2>Name:{name}</h2>
    </div>
  )
}

export default Contact