import React from 'react'
import {memo} from 'react'

const Header = () => {
    console.log("header rendered");
  return (
    <div>Header</div>
  )
}

export default memo(Header)
// memo is a react method