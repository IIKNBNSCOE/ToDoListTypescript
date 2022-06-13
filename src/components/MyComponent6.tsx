import React,{useState} from 'react'

function MyComponent6() {
    const [uname,setUname]=useState<string>()
    const [pass,setPass]=useState<string>()
  return (
    <div>
    <label>Username</label>
    <input type="text" name="uname" value={uname} onChange={(e)=>setUname(e.target.value)}/>
    <label>Password</label>
    <input type="text" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
    
    {uname}
    <br/>
    {pass}
    </div>
  )
}

export default MyComponent6