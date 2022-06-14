import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {Showlistt} from '../model/ToDoListType'
import { idText } from 'typescript'

type showlistta={
    todolist:Showlistt[]
    completedtasklist:Showlistt[]
}

const initialState:showlistta={
    todolist:[],
    completedtasklist:[]
}

export const ToDoSlice=createSlice({
    name:"ToDoList",
    initialState,
    reducers:{
        addToList:(state,action:PayloadAction<Showlistt>)=>{
           state.todolist=[...state.todolist,action.payload]
           //console.log(action.payload)
        },
        removeFromList:(state,action:PayloadAction<number>)=>{
          //  console.log(action.payload)
            state.completedtasklist=[...state.completedtasklist]
            state.todolist.forEach((item)=>
            {
                if(item.id==action.payload)
                state.completedtasklist=[...state.completedtasklist,{id:item.id,tname:item.tname,deadline:item.deadline}]
                
            })
            state.todolist=state.todolist.filter((item)=>item.id!=action.payload)          
           console.log(state.completedtasklist)
         },
         removeFromCompletedList:(state,action:PayloadAction<number>)=>{
            state.completedtasklist=state.completedtasklist.filter((item)=>item.id!=action.payload) 
         }
 

    }})
export const {addToList,removeFromList,removeFromCompletedList} = ToDoSlice.actions
export default ToDoSlice.reducer