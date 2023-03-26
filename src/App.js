import {Route, Switch} from 'react-router-dom'

import Login from './Components/Login'

import Home from './Components/Home'

import NotFound from './Components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/" component={Home} />
      <NotFound />
    </Switch>
  </div>
)
export default App
