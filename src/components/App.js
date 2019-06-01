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
      listHints: JSON.parse(sessionStorage.getItem("cities"))
    }
  }

  componentDidMount() {
    $(document).ready(function () {
      var canvas = $('#canvas')[0];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';


        var init = [];
        var maxParts = 1000;
        for (var a = 0; a < maxParts; a++) {
          init.push({
            x: Math.random() * w,
            y: Math.random() * h,
            l: Math.random() * 1,
            xs: -4 + Math.random() * 4 + 2,
            ys: Math.random() * 1 + 2
          })
        }

        var particles = [];
        for (var b = 0; b < maxParts; b++) {
          particles[b] = init[b];
        }

        function draw() {
          ctx.clearRect(0, 0, w, h);
          for (var c = 0; c < particles.length; c++) {
            var p = particles[c];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
            ctx.stroke();
          }
          move();
        }

        function move() {
          for (var b = 0; b < particles.length; b++) {
            var p = particles[b];
            p.x += p.xs;
            p.y += p.ys;
            if (p.x > w || p.y > h) {
              p.x = Math.random() * w;
              p.y = -20;
            }
          }
        }

        setInterval(draw, 30);

      }
    });
  }

  getCityForecastDetails = (city) => {
    const api_weather = getUrlWeatherByCity(city);
    const list = [...this.state.listHints];
    list.push(city);
    sessionStorage.setItem("cities", JSON.stringify(list));
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      }).then(data => {
        if (data.cod === 200) {
          let newWeather = transformWeather(data);
          this.setState({
            data: newWeather,
            listHints: list,
            city
          })
        } else {
          this.setState({ visible: true, listHints: list }, () => {
            window.setTimeout(() => {
              this.setState({ visible: false })
            }, 3000)
          });
        }
      }).catch(error => {
        console.log('Error:', error);
      })
  }

  deleteCityHistory = (data) => {
    const list = [...this.state.listHints];
    list.splice(list.findIndex((city, index) => index === data.index && city === data.city), 1);
    sessionStorage.setItem("cities", JSON.stringify(list));
    this.setState({ listHints: list, city: null })
  }

  clearForm = () => {
    this.setState({
      city: null,
      visible: false,
      data: {}
    })
  }

  render() {
    const { city, data, visible, listHints } = this.state;
    return (
      <div className="app-content">
        {visible ? <AlertComponent /> : null}
        <canvas id="canvas"></canvas>
        <Navigation />
        <Header
          searchCityByInput={this.getCityForecastDetails}
          resetCitySearch={this.clearForm}
          historyData={listHints}
          serchCityAgain={this.getCityForecastDetails}
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
