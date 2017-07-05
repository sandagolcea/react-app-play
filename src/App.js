import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Test from './components/Test';
import Footer from './components/common/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <Route path="/home" component={Home}/>
            <Route path="/test" render={() => {
              return (
                <div>
                  <Test />
                  <Footer />
                </div>
              )
            }}/>
            <Route path="/footer" component={Footer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
