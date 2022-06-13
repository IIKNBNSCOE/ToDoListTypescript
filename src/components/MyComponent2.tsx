import React from 'react'
type propst={
    name:
    {
        fname:string,
        lname:string
    }
}
function MyComponent2(props:propst) {
  return (
    <div>{props.name.fname} {props.name.lname}</div>
  )
}

export default MyComponent2