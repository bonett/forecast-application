import React from 'react';

import data from './../../constants/data';

import './style.scss';

const InputSearch = () => (
    <div className="col-12 col-md-12 mb-2 mb-md-0">
        <input type="text" name="name" className="input-location" id="nme" required />
        <label><span>{data.input_search.placeholder}</span></label>
    </div>
);

export default InputSearch;