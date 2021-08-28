import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css'

import CreateTodos from './pages/createTodo';
import ViewTodos from './pages/viewTodo';
import ViewUuid from './components/ViewUuid';
import { useEffect, useState } from 'react';

const App = () => {

const [uname, setUname] = useState('Your')

useEffect(() => { 
    if(localStorage.getItem('uname') !== null){
        setUname( localStorage.getItem('uname'))
    }
}, [uname])
return(
   <Router>
       <div>
            <h1 className='head-text'>{uname}'s ToDo List</h1>
           <h5 className='wel-text'> What would you like to do today ?</h5>
           <ul className='linkss'>
               <li>
                   <Link to='create'  className='card'> Create Todos </Link>
               </li>
               <li>
                   <Link to='view'  className='cardv' > View Todos</Link>
               </li>
           </ul>
       </div>
       <Switch>
           <Route exact path='/create'>
               <CreateTodos/>
           </Route>
           <Route path='/view/:uname'>
               <ViewTodos/>
           </Route>
           <Route path='/view'> <ViewUuid disabled={false}/> </Route>
       </Switch>
   </Router>
)
}

export default App;