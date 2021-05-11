import './style/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './views/Auth';
import Home from './views/Home';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
          <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
