import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login'
import ProtectedRouter from './components/protectedRouter'
import PrivatePage from './components/privatePage'
import PublicPage from './components/publicPage'
import ButtonLogOut from './components/buttonLogOut'

function App() {
  return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/public-page' component={PublicPage} />
        <ProtectedRouter path='/private-page' component={PrivatePage} />
      </Switch>
  );
}

export default App;
