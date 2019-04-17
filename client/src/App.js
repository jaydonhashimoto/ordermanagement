import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inventory from './components/pages/Inventory';
import Orders from './components/pages/Orders';
import Order from './components/pages/Order';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/inventory" component={Inventory} />
          <Route exact path="/" component={Orders} />
          <Route path="/order" component={Order} />
        </div>
      </Router>
    );
  }
}

export default App;
