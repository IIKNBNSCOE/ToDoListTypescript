import React,{createContext} from 'react';
import MyComponent1 from './components/MyComponent1';
import logo from './logo.svg';
import './App.css';
import MyComponent2 from './components/MyComponent2';
import MyComponent3 from './components/MyComponent3';
import MyComponent4 from './components/MyComponent4';
import MyComponent5 from './components/MyComponent5';
import Counter from './components/Counter';
import MyComponent6 from './components/MyComponent6';
import MyComponent7 from './components/MyComponent7';
import MyComponent8 from './components/MyComponent8';
import ToDoList from './components/Todolist/ToDoList';
import {store} from './services/store'
import { Provider } from 'react-redux'

export const ucontext=createContext<string>("")
function App() {
  
  const nn={
    fname:"abc",
    lname:"xyz"
  }
  const arr=[{
    fname:"jj",
    lname:"gg"
  },
  {
    fname:"hh",
    lname:"bb"
  },
  {
    fname:"zz",
    lname:"aa"
  }]
  return (
    <div className="App">
     {/* <MyComponent1 name="abc" messageCount={20} isLogged={true}/>
      <MyComponent2 name={nn}/>
      <MyComponent3 names={arr}/>
      <MyComponent4 handler={()=>alert("hi")}/>
      <MyComponent5 stylep={{color:"orange",fontSize:"3rem"}}/>
      <Counter/>
  <MyComponent6/>*/}
  <ucontext.Provider value="ToDo List">
  <MyComponent8/>
  <Provider store={store}>
  <ToDoList/>
  </Provider>
  </ucontext.Provider>
    </div>
  );
}

export default App;
