import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    render() {
        return (
            <header className="masthead-content text-white text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <InputSearch callbackFromHeader={this.getCityFromInput} callClearFromHeader={this.clearCityData} />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
}

export default Header;