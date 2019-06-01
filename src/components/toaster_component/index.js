import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ToasterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleUpdateCity = (city) => {
        this.props.callSearchAgainCity(city)
    };

    handleDeleteCity = (index, city) => {
        const data = {
            index,
            city
        }
        this.props.callDeleteCity(data);
    };

    renderLastCities = (cities) => {
        let lastCities;
        if (cities.length > 5) {
            lastCities = cities.slice(cities.length - 5, cities.length)
        } else {
            lastCities = cities;
        }
        return (
            lastCities.map((item, index) => {
                return (
                    <div className="card text-center" key={index}>
                        <div className="card-body">
                            <h5 className="card-title" onClick={() => this.handleUpdateCity(item)}>{item}</h5>
                            <a className="btn btn-primary" onClick={() => this.handleDeleteCity(index, item)}><i className="fa fa-close"></i></a>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        const { cities } = this.props;
        return (
            this.renderLastCities(cities)
        )
    }
}

ToasterComponent.propTypes = {
    cities: PropTypes.array,
    callDeleteCity: PropTypes.func,
    callSearchAgainCity: PropTypes.func
}

export default ToasterComponent;
