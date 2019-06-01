import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecastData: null
        }
    }

    render() {
        const { data } = this.props;
        console.log('ddd', data);
        return (
            <div className="location-content">
                <div className="container">
                    <div className="card card-content">
                        <div className="row">
                            <div className="col">MAPA</div>
                            <div className="col">
                                <h3 className="title">Humidity: <span>{data.humidity} %</span></h3>
                                <h3 className="title">Temperature: <span>{data.temperature} Cº</span></h3>
                                <h3 className="title">Pressure: <span>{data.pressure}</span></h3>
                                <h3 className="title">Max Temperature: <span>{data.temperature_max} Cº</span></h3>
                                <h3 className="title">Min Temperature: <span>{data.temperature_min} Cº</span></h3>
                                <h3 className="title">Wind: <span>{data.wind}</span></h3>
                            </div>
                            <div className="w-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

Location.propTypes = {
    data: PropTypes.shape({
        humidity: PropTypes.number.isRequired,
        temperature: PropTypes.string.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default Location;