import React, { Component } from 'react';
import Navigation from './navbar_component';
import Header from './header_component';
import AlertComponent from './alert_component';
import Location from './location_component';
import Footer from './footer_component';

import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: null,
      data: {},
      visible: false,
      list: {}
    }
  }

  componentDidMount() {
    sessionStorage.setItem("cities", JSON.stringify([]));
    this.setState({
      list: JSON.parse(sessionStorage.getItem("cities"))
    })
  }

  validateCityHint = (list, city) => {
    let validator;
    for (let index = 0; index < list.length; index++) {
      if (list[index] === city) {
        validator = true;
        break;
      } else {
        validator = false;
      }
    }
    return validator;
  }

  getCityForecastDetails = (city) => {
    const api_weather = getUrlWeatherByCity(city);
    let listHint = this.state.list;
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      }).then(data => {
        if (data.cod === 200) {
          if (listHint === null) {
            sessionStorage.setItem("cities", JSON.stringify(city));
            let newWeather = transformWeather(data);
            this.setState({
              data: newWeather,
              city
            })
          } else {
            const result = this.validateCityHint(listHint, city);
            if (!result) {
              listHint.push(city);
              sessionStorage.setItem("cities", JSON.stringify(listHint));
              let newWeather = transformWeather(data);
              this.setState({
                data: newWeather,
                city
              })
            } else {
              let newWeather = transformWeather(data);
              this.setState({
                data: newWeather,
                city
              })
            }
          }
        } else {
          this.setState({ visible: true }, () => {
            window.setTimeout(() => {
              this.setState({ visible: false })
            }, 3000)
          });
        }
      }).catch(error => {
        console.log('Error:', error);
      })
  }

  getLastCityForecastDetails = (city) => {
    const api_weather = getUrlWeatherByCity(city);
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      }).then(data => {
        let newWeather = transformWeather(data);
        this.setState({
          data: newWeather,
          city
        })
      }).catch(error => {
        console.log('Error:', error);
      })
  }

  deleteCityHistory = (data) => {
    let listHint = this.state.list;
    listHint.splice(listHint.findIndex((city, index) => index === data.index && city === data.city), 1);
    sessionStorage.setItem("cities", JSON.stringify(listHint));
    this.setState({ city: null, list: listHint })
  }

  clearForm = () => {
    this.setState({
      city: null,
      visible: false,
      data: {}
    })
  }

  render() {
    const { city, data, visible } = this.state;
    const listHints = JSON.parse(sessionStorage.getItem("cities"));
    return (
      <div className="app-content">
        {visible ? <AlertComponent /> : null}
        <Navigation />
        <Header
          searchCityByInput={this.getCityForecastDetails}
          resetCitySearch={this.clearForm}
          serchCityAgain={this.getLastCityForecastDetails}
          historyData={listHints}
          deleteCity={this.deleteCityHistory} />
        <div className="wrapper-content">
          {
            city ? <Location data={data} /> : null
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
