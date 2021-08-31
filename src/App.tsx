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
import Home from './pages/Home';

const App = () => {
return(<>
   <Router>
       <div>    
           <ul className='linkss'>
               <li>
                   <Link to='/' className='cardh'> Home</Link>
               </li>
               <li>
                   <Link to='create'  className='card'> Create Todos </Link>
               </li>
               <li>
                   <Link to='view'  className='cardv' > View Todos</Link>
               </li>
           </ul>
       </div>
       <Switch>
           <Route path='/create'>
               <CreateTodos/>
           </Route>
           <Route path='/view/:uname'>
                <ViewTodos/>
           </Route>
           <Route path='/view'> 
                <ViewUuid /> 
           </Route>
           <Route path='/'>
               <Home/>
           </Route>
       </Switch>
   </Router>
   </>
)
}

export default App;