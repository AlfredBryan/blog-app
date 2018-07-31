import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Auth-login/Login';
import RegProfile from './components/RegProfile/RegProfile';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/regprofile' component={RegProfile} />
      </div>

    );
  }
}

export default App;