import React from 'react'
import styles from './Form.module.css'
import { BiAddToQueue} from 'react-icons/bi'

const Form = ({setInputText, todos, setTodos, inputText, setStatus,}) =>{
    const inputFormHandler = (event) =>{
       setInputText(event.target.value)
    }
    const suubmitTodoHandler=(event)=>{
        event.preventDefault();
        setTodos([
            ...todos,
            {item: inputText, isCompleted:false, id: Math.random() *1000 },
        ]);
        setInputText("")
        //console.log(todos)
    }
    const statusHandler=(event)=> {
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