import React from 'react';
import './stylesheets/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage'
import UserPage from './pages/userpage'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/user" component={UserPage}/>
        </Switch>
      </BrowserRouter>
  )
}


export default App;
