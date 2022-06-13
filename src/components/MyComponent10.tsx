//useRef with Typescript
import React,{useEffect,useRef,FC} from 'react'
const MyComponent10:FC=()=>{
  const iref=useRef<HTMLInputElement>(null!)
  useEffect(
      ()=>
      {
          iref.current.focus()
      },[])
  return (
    <div>
        <input type="text" ref={iref}/>
   </div>
  )
}

export default MyComponent10