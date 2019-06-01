import React from 'react';
import data from './../../constants/data';
import './style.scss';

const Navigation = () => {

    const socialNetworkRedirect = (social) => {
        console.log(social);
        switch (social) {
            case 'instagram':
                return window.open(data.social.instagram);
            case 'linkedin':
                return window.open(data.social.linkedin);
            case 'logo':
                return window.location.href;
            default:
                return window.open(data.social.twitter);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="brand" onClick={() => socialNetworkRedirect('logo')}>{data.navigation.application_name}</a>
                <div className="social text-right">
                    <a onClick={() => socialNetworkRedirect('instagram')} className="fa fa-instagram"></a>
                    <a onClick={() => socialNetworkRedirect('linkedin')} className="fa fa-linkedin"></a>
                    <a onClick={() => socialNetworkRedirect('twitter')} className="fa fa-twitter"></a>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;