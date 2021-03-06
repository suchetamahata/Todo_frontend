import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
//import { toast } from 'react-toastify'
import Todo from '../../components/Todo.js'
import '../../App.css'

const ViewTodos = () =>{
    const params = useParams();
    const [todos, setTodos] = useState([])
    const [length, setLength] = useState(Number)
    console.log(params.uname)

    useEffect(()=>{
        (async  ()=>{
            try{
                const response = await fetch(`http://localhost:8000/todos/listByName/${params.uname}`,{
                    method :'GET',
                    mode:'cors',
                });
                console.log(response);
                const data = await response.json();
                setLength (data.length)
                console.log(data);
                console.log({length})
                setTodos(data);
            }catch(error){
                throw error;
            }
          })()
    },[length, params.uname])
   
    if(length === 0){
        return(<h3 className='head-text'> Error! something went wrong </h3>)
    }
   else{
        let x  =  todos.map((todo) => {
            console.log(todo);
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
        console.log(x);
        return x;
    }
}


export default ViewTodos