import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { authenticationService } from '../../services/authenticationService';
import { validationService } from '../../services/validationService';
import Tabs from './tabs';

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
        };
    }

    bindEventHandlers() {
        this.submitForm = this.submitForm.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    // Personal methods

    updateValue({ target }) {
        this.setState({
            [target.id]: target.value
        });
    }


    submitForm(event) {
        event.preventDefault();

        const {username, password} = this.state;

        let userData = {
            username,
            password
        };

        let validated = validationService.validateLogin();
        if (validated === true) {
            authenticationService.login(userData);   
        }
    }

    render() {

        return (
            <div className="col s6 container row">
                <Tabs/>
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
                        <input type="submit" value="Login" className="btn waves-effect waves-light blue lighten-3" />
                    </div>
                </form>
            </div>
        );
    }
}

