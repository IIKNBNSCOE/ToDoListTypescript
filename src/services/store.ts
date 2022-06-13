import {configureStore} from "@reduxjs/toolkit"
import todoreducer from './ToDoSlice'

export const store=configureStore({
    reducer:{
        ToDoList:todoreducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch