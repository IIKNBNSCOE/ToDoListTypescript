//UseReducer with Typescript
import React,{useReducer} from 'react'
type StateT={
    count:number
}
type UpdateT={
    type:"increment"|"decrement"
    payload:number
}
type ResetT={
    type:"reset"
}
type ActionT=UpdateT|ResetT


function MyComponent7() {
    const initialState={
        count:0
    }
    const reducer=(state:StateT,action:ActionT)=>
    {
        switch(action.type)
        {
            case "increment":
                             return {count:state.count+action.payload}                             
            case "decrement":
                             return {count:state.count-action.payload}                            
            case "reset":
                            return initialState                           
            default: return state

        }
    }
    const [state,Dispatch]=useReducer(reducer,initialState)
  return (
    <div>
    <button onClick={()=>{Dispatch({type:"increment",payload:1})}}>Increment</button>
    <button onClick={()=>{Dispatch({type:"increment",payload:10})}}>Increemnt by 10</button>
    {state.count}
    <button onClick={()=>{Dispatch({type:"decrement",payload:1})}}>Decrement</button>
    <button onClick={()=>{Dispatch({type:"decrement",payload:10})}}>Decrement by 10</button>
    <button onClick={()=>{Dispatch({type:"reset"})}}>Reset</button>

    </div>
  )
}

export default MyComponent7