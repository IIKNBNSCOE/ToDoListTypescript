import React,{FC} from 'react'
import '../../assets/mystyle.css'
import {AiFillDelete} from "react-icons/ai"
type ShowlistT=
{
    listi:{
        id:number
        tname:string
        deadline:number
    }
    dhandler:(id1:number)=>void
}

export const ShowList:FC<ShowlistT> = ({listi,dhandler}) => {
  return (
      <div className='gridcontainer'>
          <div className="griditem">{listi.tname}</div>
          <div className="griditem">{listi.deadline}</div>
          <div className="griditem"><div onClick={()=>dhandler(listi.id)}><AiFillDelete/></div></div>
      </div>
  )
}

