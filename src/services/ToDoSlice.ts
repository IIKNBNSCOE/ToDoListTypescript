import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {Showlistt} from '../model/ToDoListType'

type showlistta={
    todolist:Showlistt[]
}

const initialState:showlistta={
    todolist:[],
}

export const ToDoSlice=createSlice({
    name:"ToDoList",
    initialState,
    reducers:{
        addToList:(state,action:PayloadAction<Showlistt>)=>{
           state.todolist=[...state.todolist,action.payload]
           console.log(action.payload)
        },
        removeFromList:(state,action:PayloadAction<number>)=>{
            console.log(action.payload)
            state.todolist=state.todolist.filter((item)=>item.id!=action.payload)
           // console.log(state.todolist)
         }
 

    }})
export const {addToList,removeFromList} = ToDoSlice.actions
export default ToDoSlice.reducer