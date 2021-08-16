//import { v4 as uuidv4 } from 'uuid'

//import {getUuid} from 'uuid-by-string'
import { AiOutlineSave } from 'react-icons/ai'
import "react-notification-alert/dist/animate.css";

import FormDialog from '../../components/materialUiForm.js';
import Form from '../../components/Form.js'
import TodoList from '../../components/TodoList.js'
import React,{useState, useEffect} from 'react'
import disp from './createTodo.module.css';


function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("");
  const [filterTodos, setFilterTodos] = useState([]);

//toast.configure()

// useEffect(() => {
//  if(localStorage.getItem('uuid') === null){
//  localStorage.setItem('uuid',uuidv4())
//  }
// })

// useEffect(() => {
//   if(localStorage.getItem('uname') === null){
//     const x = prompt("Enter you name");
//     localStorage.setItem('uname',x);
//   }
//  })

 useEffect(()=>{
( () =>{
    switch(status){
      case "completed":
        setFilterTodos(todos.filter((todo)=> todo.isCompleted === true));
      break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo)=> todo.isCompleted === false));
      break;
      default:
        setFilterTodos(todos)
      break;
    }
  }) ()
 }, [todos, status]);

 const submitToDataBase = (event)=>{
  event.preventDefault()
  const uuid = localStorage.getItem('uuid')
  const uname = localStorage.getItem('uname')
  const todoswithUUid = todos.map(todo => {
    return {
      ...todo,
      uuid,
      uname
    }
  })
  fetch('http://localhost:8000/todos/create',{
      method : 'POST',
      mode:'cors',
      headers : {
          'Content-Type':'application/json'
      },
      body:JSON.stringify(todoswithUUid)
  }).then((data) => {
      console.log(data)
      alert('Your Todo List is saved')
      //toast('Your Todo List is saved', {position: toast.POSITION.TOP_CENTER})
  }).catch((error) =>{
      console.error(error)
      //toast('error in saving',{position: toast.POSITION.TOP_CENTER})
      alert('error in saving')
  })
}

  return ( 
  <div >
    <div className={disp.divstyle}>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} 
            setInputText={setInputText} setStatus={setStatus} ></Form>
      </div>
    <div className={disp.divstyle}>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}></TodoList>
    </div>
     <div className={disp.divBtn}> 
       <button onClick={submitToDataBase} type='submit' className={disp.subButton} >Save 
       <AiOutlineSave/></button>
       <FormDialog></FormDialog>
      </div>
  </div>
  );
}

export default App;
