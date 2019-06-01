import React, { Component } from 'react';
import Navigation from './navbar_component';
import Header from './header_component';
import Location from './location_component';
import Footer from './footer_component';

import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';
import AlertComponent from './alert_component';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: null,
      data: {},
      visible: false
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
            ys: Math.random() * 10 + 10
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
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      }).then(data => {
        if (data.cod === 200) {
          let newWeather = transformWeather(data);
          this.setState({
            data: newWeather,
            city
          })
        } else {
          this.setState({ visible: true }, () => {
            window.setTimeout(() => {
              this.setState({ visible: false })
            }, 3500)
          });
        }
      }).catch(error => {
        console.log('Error:', error);
      })
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
    return (
      <div className="app-content">
        <canvas id="canvas"></canvas>
        <Navigation />
        <Header searchCityByInput={this.getCityForecastDetails} resetCitySearch={this.clearForm} />
        <div>
          {
            visible ? <AlertComponent /> : null
          }
        </div>
        <div>
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
