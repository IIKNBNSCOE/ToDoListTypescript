import React, { useState } from 'react'

function Counter() {
const [counter,setCounter]=useState(0)
  return (
    <div>
    <button onClick={()=>setCounter((prev)=>(prev+1))}>+</button>
    {counter}
    <button onClick={()=>setCounter((prev)=>(prev-1))}>-</button>
    </div>
  )
}

export default Counter