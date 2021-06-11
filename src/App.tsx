import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login4 from './components/login4'
import ProtectedRouter from './components/protectedRouter'
import PrivatePage from './components/privatePage'
import PublicPage from './components/publicPage'


function App() {
  return (
      <Switch>
        <Route exact path='/login4' component={Login4} />
        <Route exact path='/public-page' component={PublicPage} />
        <ProtectedRouter path='/private-page' component={PrivatePage} />
      </Switch>
  );
}

export default App;
