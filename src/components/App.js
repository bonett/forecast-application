import React, { Component } from 'react';
import Navigation from './navbar_component';
import Header from './header_component';
import Footer from './footer_component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="app-content">
        <Navigation />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
