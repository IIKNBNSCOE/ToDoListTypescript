import React from 'react'
type Propsstyle={
    stylep:React.CSSProperties
}

function MyComponent5(props:Propsstyle) {
  return (
    <h1 style={props.stylep}>Welcoome to Typescript with React</h1>
  )
}

export default MyComponent5