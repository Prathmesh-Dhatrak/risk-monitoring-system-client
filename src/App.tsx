import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Regiestor from './pages/Regiestor';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/regiestor" component={Regiestor} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
