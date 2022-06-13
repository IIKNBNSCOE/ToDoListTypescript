import React,{useContext} from 'react'
import {ucontext} from '../App'

function MyComponent9() {
    const user=useContext(ucontext)
  return (
    <h1 style={{color:"#3C1361"}}>{user}</h1>
  )
}

export default MyComponent9