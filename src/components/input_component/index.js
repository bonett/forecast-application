import React, { Component } from 'react';
import data from './../../constants/data';
import './style.scss';

class InputSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $("#name").focus();
    }


    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.props.callbackFromParent(event.target.value);
        }
    };

    render() {
        return (
            <div className="col-12 col-md-12 mb-2 mb-md-0">
                <input type="text" name="name" className="input-location" id="name" onKeyPress={this.handleKeyPress} required />
                <label><span>{data.input_search.placeholder}</span></label>
            </div>
        )
    }
}


export default InputSearch;