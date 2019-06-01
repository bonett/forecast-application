import React, { Component } from 'react';
import data from './../../constants/data';
import './style.scss';

class InputSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            disableClearButton: true
        }
    }

    componentDidMount() {
        $("#name").focus();
    }

    validateClearButton = (event) => {
        if (event.target.value.length !== 0) {
            this.setState({ disableClearButton: false, value: event.target.value });
        } else {
            this.setState({ disableClearButton: true });
        }
    }

    clearForm = () => {
        this.setState({ value: '', disableClearButton: true });
        this.props.callClearFromHeader('');
        $("#name").focus();
    }

    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.props.callbackFromHeader(event.target.value);
        }
    };

    render() {
        const { disableClearButton, value } = this.state;
        return (
            <div className="col-12 col-md-12 mb-2 mb-md-0">
                <input type="text" name="name" className="input-location" id="name" value={value} onKeyPress={this.handleKeyPress} onChange={this.validateClearButton} required />
                <label><span>{data.input_search.placeholder}</span></label>
                <button type="button" className="btn btn-primary" disabled={disableClearButton} onClick={this.clearForm} >{data.input_search.search_button}</button>
            </div>
        )
    }
}


export default InputSearch;