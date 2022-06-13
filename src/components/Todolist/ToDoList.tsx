import React,{FC,useState,ChangeEvent,useRef, useEffect} from 'react'
import {ShowList} from './ShowList'
import '../../assets/mystyle.css'
import {Showlistt} from '../../model/ToDoListType'
import {useAppDispatch,useAppSelector} from '../../services/hooks'
import {addToList,removeFromList} from '../../services/ToDoSlice'


const ToDoList:FC= () => {
  const [tname,setTaskname]=useState<string>("")
  const [deadline,setDeadline]=useState<number>(null!)
  //const [showlist,setShowlist]=useState<Showlistt[]>([])
  const tref=useRef<HTMLInputElement>(null!)
  const dispatch=useAppDispatch()
  const toDoList=useAppSelector(state=>state.ToDoList)
  useEffect(()=>
  {
      tref.current.focus()
  },[])
  const handler=(e:ChangeEvent<HTMLInputElement>):void=>
  {
      if(e.target.name==="tname")
      {
        setTaskname(e.target.value) 
      }
      else
      {     
        setDeadline(Number(e.target.value))     
      }
  }
  const bhandler=():void=>
  {
    if(tname!='' && deadline>0)
    {
     // setShowlist([...showlist,{tname,deadline}])
      dispatch(addToList({id:Date.now(),tname,deadline}))
      setDeadline(0)
      setTaskname("")
    }
    else if(deadline<=0)
    {
      alert("Deadline cannot be negative or zero")
    }
    else if(tname=='')
    {
      alert("Kindly enter all fields")
    }     

  }

  const rhandler=(id1:number):void=>
  {
      //setShowlist(showlist.filter((item)=>item.tname!=ttname))
      dispatch(removeFromList(id1))
      //console.log("in rhandler")
  }
  console.log()
  return (
      <>
    <div className='ToDoList'>
   <input type="text" name="tname" value={tname} ref={tref} placeholder="Enter Task Name" onChange={handler}/>
   <input type="number" name="dead" value={deadline} placeholder='Enter deadline' onChange={handler}/>
   <button onClick={bhandler}>Add to List</button>
   </div>
   {
       toDoList.todolist.map((list)=>{
       return <ShowList listi={list} dhandler={rhandler}/>})
   }
   
    </>
  )
}

export default ToDoList