import { useEffect, useState, FC } from 'react'
import { useParams } from 'react-router-dom';
//import { toast } from 'react-toastify'
import Todo from '../../components/Todo'
import '../../App.css'
import { TodoType } from '../createTodo/index'

interface param {
    uname: string
}

interface Prop {
    children: any
}

const ViewTodos = () => {
    const params = useParams<param>();
    const [todos, setTodos] = useState<TodoType[]>([])
    const [length, setLength] = useState<number>(Number)
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

    if (length === 0) {
        return (<h3 className='head-text'> Error! something went wrong </h3>)
    }
    else {
        return (<>{
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
        </>)
    }
}


export default ViewTodos