import React, { Component } from 'react';

const cities = [
  "Barranquilla,CO",
  "Buenos Aires,ar",
  "Madrid,es",
  "Mexico,mex",
  "Bogota,CO",
  "Quebec,ca",
  "Washington,us",
  "Barcelona,es",
  "Lima,pe"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
    this.setState({
      city
    });
  }

  render() {
    const { city } = this.state;
    return (
      <div className="app-content">
        {/* <NavigationApp />
        <div className="wrapper">
          <div className="col-6 city-list">
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </div>
          <div className="col-6 city-details">
            {city && <ForecastExtended city={city} />}
          </div>
        </div> */}
        WORKING
      </div>
    );
  }
}

export default App;
