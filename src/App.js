import React from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Views/Auth/login'
import Register from './Views/Auth/register'
import Sidebar from './Views/Sidebar/sidebar'
import Dashboard from './Views/Pages/Dashboard/dashboard'
import ViewBugPage from './Views/Pages/viewBugs'
import CreateBug from './Views/Components/bug-create-edit/bugForm'

function App() {
  /*there are three slices in the redux file: 'auth', 'bug', and 'user'. destructure 'auth'*/
  const {auth} = useSelector(state=>state); 

  return (
    <Router>
      {
      auth.LoggedIn ? 
      <>
        <Sidebar/>
        <Switch>
          <Route path="/" exact><Dashboard/></Route>
          <Route path="/viewbugs"><ViewBugPage/></Route>
          <Route path="/create">
            <div className='page-container'>
              <CreateBug title='Create Bug'/>
            </div>
          </Route>
        </Switch>
      </> 
      :
      <>
        <Route path="/"><Login/></Route>
        <Route path="/register"><Register/></Route>
      </>
      }
    </Router>
  );
}

export default App;