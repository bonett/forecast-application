import React from 'react';
import data from './../../constants/data';
import './style.scss';

const Navigation = () => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <a className="navbar_brand" href="#">{data.navigation.application_name}</a>
            <a className="btn btn-primary" href="#">{data.navigation.button_reference}</a>
        </div>
    </nav>
);

export default Navigation;