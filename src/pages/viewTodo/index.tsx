import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';

import Todo from '../../components/Todo'
import '../../App.css'
import { TodoType } from '../createTodo/index'

interface param {
    uname: string
}

const ViewTodos = () => {
    const params = useParams<param>();
    const [todos, setTodos] = useState<TodoType[]>([])
    const [length, setLength] = useState<number|undefined>(undefined)
    console.log(params.uname)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:8000/todos/listByName/${params.uname}`, {
                    method: 'GET',
                    mode: 'cors',
                });
                console.log(response);
                const data = await response.json();
                setLength(data.length)
                console.log(data);
                console.log({ length })
                setTodos(data);
            } catch (error) {
                throw error;
            }
        })()
    }, [length, params.uname])

    if (length === undefined) {
        return (<>
            <h5 className='wel-text'> You are doing great!</h5>
            <h3 className='head-text'> Loading ... <CachedRoundedIcon className='head-text'/></h3>
        </>)
    }
    else if (length === 0) {
        return (<>
             <h5 className='wel-text'>  You are doing great!</h5>
            <h3 className='head-text'> Error! something went wrong </h3>
        </>)}
    else {
        return (<>
        <h5 className='wel-text'> You are doing great!</h5>
        {
            todos.map((todo) => {
                return (
                    <Todo setTodos={setTodos}
                        todos={todos}
                        key={todo._id}
                        item={todo.item}
                        todo={todo}
                        disabled={true}
                        length={length}>
                    </Todo>
                )
            })
        }
        <h5 className='home-text'> Don't forget to love yourself :) </h5>
        </>)
    }
}


export default ViewTodos