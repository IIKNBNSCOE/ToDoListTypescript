import React from 'react'
type Propst=
{
    names:{
        fname:string,
        lname:string
    }[]
}

function MyComponent3(props:Propst) {
  return (
    <div>
        {
            props.names.map((item)=>{
                return <p>{item.fname}  {item.lname}</p>
            }
            )
        }
    </div>
  )
}

export default MyComponent3