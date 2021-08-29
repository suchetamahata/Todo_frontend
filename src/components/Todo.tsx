import React from 'react'
import styles from './Todo.module.css'
import { AiOutlineFileDone } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'

const Todo = ({ item, todo, todos, setTodos, disabled, key}: any) =>{
    
    const deleteHandler =()=>{
     setTodos(todos.filter((el: any) => el.id !== todo.id))
    }

    const compHandler =()=> {
        setTodos(todos.map((elem: any) => {
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