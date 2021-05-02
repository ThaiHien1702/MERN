import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Layout/Landing';
import Auth from './view/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} ></Route>
        <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} ></Route>
        <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
