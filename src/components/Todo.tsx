import React from 'react'
import styles from './Todo.module.css'
import { AiOutlineFileDone } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'
import {TodoType} from '../pages/createTodo/index'

interface TodoProp{
  children: any,
  item: string | undefined,
  todo: TodoType,
  todos: TodoType[],
  setTodos:(b: TodoType[]) => void,
  disabled?: boolean,
  key: number|string|undefined,
  length?: number
}

const Todo = ({ item, todo, todos, setTodos, disabled, key}: TodoProp) =>{
    
    const deleteHandler =()=>{
     setTodos(todos.filter((el:TodoType) => el.id !== todo.id))
    }

    const compHandler =()=> {
        setTodos(todos.map((elem: TodoType) => {
            if( elem.id === todo.id){
                return{
                    ...elem, isCompleted: !elem.isCompleted
                }
            }
            return elem;
        }))
    }

    return(
        <div className={styles.divstyle} key={key}>
            <li className={`${styles.listi} ${todo.isCompleted ? styles.completed :'' }`}> {item} </li>
            <button onClick={compHandler} className={`${styles.completeBtn} ${disabled ? styles.hide :'' }`} disabled={disabled}><AiOutlineFileDone/>
            </button>
            <button onClick={deleteHandler} className={`${styles.deleteBtn} ${disabled ? styles.hide : ''}`} disabled={disabled}><AiOutlineDelete/>
            </button>
      </div>
    )
}
export default Todo