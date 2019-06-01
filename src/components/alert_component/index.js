import React from 'react';
import data from './../../constants/data';
import './style.scss';

const AlertComponent = () => (
    <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
        <strong>Ops!</strong> {data.error_message.description}
    </div>
);

export default AlertComponent;