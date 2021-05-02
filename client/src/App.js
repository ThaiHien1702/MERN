import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Layout/Landing';
import Auth from './view/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './view/Dashboard';
import ProtectedRoute from './components/Layout/routing/ProtectedRoute';

function App() {
  return (

    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} ></Route>
          <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} ></Route>
          <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} ></Route>
          <ProtectedRoute exact path='/dashboard' component={Dashboard} ></ProtectedRoute>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
