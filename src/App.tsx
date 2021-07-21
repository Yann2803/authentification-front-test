import { Switch, Route } from "react-router-dom";
import Login from './screens/login'
import ProtectedRouter from './components/protectedRouter'
import PrivatePage from './components/privatePage'
import PublicPage from './components/publicPage'
import TemporaryPassword from './screens/temporaryPassword'
import './App.css'

function App() {

  return (
    <div className={'App'}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/public-page' component={PublicPage} />
        <ProtectedRouter path='/private-page' component={PrivatePage} />
        <ProtectedRouter path='/temporary' component={TemporaryPassword} />
      </Switch>
    </div>
  );
}
export default App;
