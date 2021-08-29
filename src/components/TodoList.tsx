import React from 'react'
import Todo from './Todo'
import {TodoType} from '../pages/createTodo/index'

const TodoList = ({ todos, setTodos, filterTodos }:any) =>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {filterTodos.map((todo:TodoType) =>(
                <Todo setTodos={setTodos}
                      todos={todos} 
                      key={todo.id} 
                      item={todo.item}  
                      todo={todo}>
                </Todo>
            ))}
        </ul>
      </div>
    )
}
export default TodoList