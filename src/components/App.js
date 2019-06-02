import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from '../containers/home_container';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
