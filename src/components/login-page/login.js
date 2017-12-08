import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { authenticationService } from '../../services/authenticationService';
import { validationService } from '../../services/validationService';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
    }

    // Initialization methods

    initState() {
        return {
            username: '',
            password: '',
            errorMessage: '',
            isHidden: true
        };
    }

    bindEventHandlers() {
        this.submitForm = this.submitForm.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.errorMessage = this.errorMessage.bind(this);
    }


    updateValue({ target }) {
        this.setState({
            [target.id]: target.value
        });
    }


    submitForm(event) {
        event.preventDefault();

        const { username, password } = this.state;

        let userData = {
            username,
            password
        };

        let validated = validationService.validateLogin();
        if (validated === true) {
            authenticationService.login(userData, this.errorMessage);
        }
    }

    errorMessage(errorMessage) {
        this.setState({ errorMessage, isHidden: false });
    }

    render() {

        return (
            <div className="row form-welcome">
                <form className="col s12" onSubmit={this.submitForm} >

                    <div className="input-field col s12">
                        <input id="username" type="text" onChange={this.updateValue} value={this.state.email} />
                        <label htmlFor="username">Username</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" onChange={this.updateValue} type="password" value={this.state.password} />
                        <label htmlFor="password">Password</label>
                        <span className="helper-text" data-error="password need to be at least 6 char long" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <button type="submit" className="btn waves-effect waves-light right">Login</button>
                    </div>
                </form>
                <div className={['col', 's12', this.state.isHidden && 'hide'].join(' ')}>
                    <div className='error-box'>
                        <p>SERVER RESPONSE</p>
                        <p className='error-message'>{this.state.errorMessage}</p>
                        <p>PLEASE TRY AGAIN!</p>
                    </div>
                </div>
            </div>
        );
    }
}

