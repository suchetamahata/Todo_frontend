import React from 'react'
import styles from './Form.module.css'
import { BiAddToQueue} from 'react-icons/bi'
import {TodoType} from '../pages/createTodo/index'

interface FormProps{
    todos:TodoType[],
    inputText: string,
    setInputText:(a: string) => void,
    setTodos:(b: TodoType[]) => void,
    setStatus:(arg0: string) => void 
 }

const Form = ({setInputText, todos, setTodos, inputText, setStatus }: FormProps) =>{
    const inputFormHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
       setInputText(event.target.value)
    }
    const suubmitTodoHandler=(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setTodos([
            ...todos,
            {item: inputText, isCompleted:false, id: Math.random()*1000 },
        ]);
        setInputText("")
        //console.log(todos)
    }
    const statusHandler=(event: React.ChangeEvent<HTMLSelectElement>)=> {
        setStatus(event.target.value)
    }
 
        return(
            <div className={styles.divstyle}>
        <form>
            <input value={inputText} onChange={inputFormHandler} type='text' className={styles.inputs} placeholder='Enter yourTodo'/>
            <button onClick={suubmitTodoHandler} type='submit' className={styles.submitBtn}><BiAddToQueue/>
            </button>
                <select onChange={statusHandler} name='todos' className={styles.option}>
                    <option value='all'>View All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
        </form>
        </div>
    )
}

export default Form 