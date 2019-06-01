import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es';
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
        return (
            <div className="location-content">
                <div className="container">
                    <div className="card mb-3" >
                        <div className="row">
                            <div className="col-md-8">
                                <img src="https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/gmll_screen_002.png" className="card-img" alt="Map" />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{data.name} - {data.country}</h5>
                                    <h6 className="card-item">Humidity: <span>{data.humidity} %</span></h6>
                                    <h6 className="card-item">Temperature: <span>{data.temperature} Cº</span></h6>
                                    <h6 className="card-item">Pressure: <span>{data.pressure}</span></h6>
                                    <h6 className="card-item">Max Temperature: <span>{data.temperature_max} Cº</span></h6>
                                    <h6 className="card-item">Min Temperature: <span>{data.temperature_min} Cº</span></h6>
                                    <h6 className="card-item">Wind: <span>{data.wind}</span></h6>
                                </div>
                            </div>
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
        country: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        temperature_max: PropTypes.string.isRequired,
        temperature_min: PropTypes.string.isRequired,
        pressure: PropTypes.number.isRequired
    }),
}

export default Location;