import React from 'react'
type PropsF={
    handler:()=>void
}
function MyComponent4(props:PropsF) {
  return (
    <button onClick={props.handler}>Ok</button>
  )
}

export default MyComponent4