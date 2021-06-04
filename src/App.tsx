import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './components/login'
import LoggedIn from './components/loggedIn'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path= '/login' component={Login}/>
        <Route path= '/loggedIn' component={LoggedIn}/>
      </Switch>
      
    </div>
  );
}

export default App;
