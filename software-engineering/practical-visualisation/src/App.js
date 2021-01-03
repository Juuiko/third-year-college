import React from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router-dom'
import history from './backend/history'
import HomePage from './pages/homepage'
import UserPage from './pages/userpage'

function App() {
  return (
    <div className="App">
      <Router history={history} basename=".">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/user" component={UserPage}/>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
