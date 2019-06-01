import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToasterComponent from '../toaster_component';
import InputSearch from '../input_component';
import './style.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getCityFromInput = (city) => {
        this.props.searchCityByInput(city);
    }

    clearCityData = () => {
        this.props.resetCitySearch('');
    }

    getCityDetailsAgain = (city) => {
        this.props.serchCityAgain(city);
    }

    getDeleteCity = (data) => {
        this.props.deleteCity(data);
    }

    render() {
        const { historyData } = this.props;
        return (
            <header className="masthead-content text-white text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <InputSearch callbackFromHeader={this.getCityFromInput} callClearFromHeader={this.clearCityData} />
                        </div>
                    </div>
                    <div className="row">
                        {historyData.length > 0 ? <ToasterComponent cities={historyData} callDeleteCity={this.getDeleteCity} callSearchAgainCity={this.getCityDetailsAgain} /> : null}
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    historyData: PropTypes.array,
    searchCityByInput: PropTypes.func,
    resetCitySearch: PropTypes.func,
    serchCityAgain: PropTypes.func,
    deleteCity: PropTypes.func
}

export default Header;