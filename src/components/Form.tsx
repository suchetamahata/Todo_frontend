import React from 'react'
import styles from './Form.module.css'
import { BiAddToQueue} from 'react-icons/bi'
import {TodoType} from '../pages/createTodo/index'

// interface FormProps{
//     todos:TodoType[],
//     inputText: string,
//     setInputText:(a:string) => void,
//     setTodos:(TodoType[]) => void,
//     setStatus:(arg0: boolean) => void
//  }

const Form = ({setInputText, todos, setTodos, inputText, setStatus }: any) =>{
    const inputFormHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
       setInputText(event.target.value)
    }
    const suubmitTodoHandler=(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setTodos([
            ...todos,
            {item: inputText, isCompleted:false },
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
            <input value={inputText} onChange={inputFormHandler} type='text' className={styles.inputs} placeholder='Todo'/>
            <button onClick={suubmitTodoHandler} type='submit' className={styles.submitBtn}><BiAddToQueue/>
            </button>
                <select onChange={statusHandler} name='todos' className={styles.option}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
        </form>
        </div>
    )
}

export default Form 