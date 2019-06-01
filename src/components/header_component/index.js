import React from 'react';
import InputSearch from '../input_component';
import './style.scss';

const Header = () => (
    <header className="masthead-content text-white text-center">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                    <InputSearch />
                </div>
            </div>
        </div>
    </header>
);

export default Header;