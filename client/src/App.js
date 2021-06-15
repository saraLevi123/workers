import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Components/Main/Main';
import Status from './Components/Status/Status';
import Login from './Components/Login/Login';
import { Router, Route, Switch } from 'react-router-dom';
import history from './config/history'


function App() {

  return (
    < Provider store={store} >
      <Router history={history}>
        <div className="App">
          <Switch>
          <Route path='/main/status'>
              <Status></Status>
            </Route>
            <Route path='/main'>
              <Main></Main>
            </Route>
            <Route path='/'>
              <Login></Login>
            </Route>
          </Switch>
        </div >
      </Router>
    </Provider >

  );
}

export default App;
