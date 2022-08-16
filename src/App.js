// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Signup from './Components/Signup'
import Login from './Components/Login'
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/Feed'
import PrivateRoute from './Components/PrivateRoute';
import ForgotPassword from './Components/ForgotPassword';
import Profile from './Components/Profile';
import Ioa from './Components/Ioa'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/forgotPassword' component={ForgotPassword} />
          <PrivateRoute path='/profile/:id' component={Profile} />
          <PrivateRoute path='/' component={Feed} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
