import React from 'react'
type Prop={
    name:string,
    messageCount?:number,
    isLogged:boolean

}
function MyComponent1(props:Prop) {
  return (
    <div>
        {props.isLogged?`${props.name} and ${props.messageCount}`:'Welcome'}
        
    </div>
  )
}

export default MyComponent1