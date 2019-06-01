import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { latitude, longitude } = this.props;
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{
                    lat: latitude,
                    lng: longitude
                }}
            />
        );
    }
}

MapContainer.propTypes = {
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB7XJ_eKoEVKLJl4Ug4vFY4lJEcga-NHpY'
})(MapContainer);