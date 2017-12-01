import React, { Component } from "react";
import { Link } from "react-router-dom";
import { validate } from "jquery";

import AuthenticationService from "../../services/authenticationService";
import ValidationService from "../../services/validationService";
import Tabs from "./tabs";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
        this.createInstances();
    }

    // Initialization methods

    initState() {
        return {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmedPassword: ""
        };
    }

    bindEventHandlers() {
        this.updateValue = this.updateValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    createInstances() {
        this.authentication = new AuthenticationService();
        this.validation = new ValidationService();
    }

    // Personal methods

    updateValue({target}) {
        this.setState({
            [target.id]: target.value
        });
    }

    // nameChangeHandler(event) {
    //     const usernameString = event.target.value;

    //     this.setState({
    //         usernameString
    //     });
    // }
    // usernameChangeHandler(event) {
    //     const nameString = event.target.value;

    //     this.setState({
    //         nameString
    //     });
    // }
    // emailChangeHandler(event) {
    //     const emailString = event.target.value;

    //     this.setState({
    //         emailString
    //     });
    // }
    // passwordChangeHandler(event) {
    //     const passwordString = event.target.value;

    //     this.setState({
    //         passwordString
    //     });
    // }
    // passwordConfirmedHandler(event) {
    //     const confirmedPassword = event.target.value;

    //     this.setState({
    //         confirmedPassword
    //     });
    // }

    submitForm(event) {
        event.preventDefault();

        const { name, password, confirmedPassword, email, username} = this.state;

        let userData = {
            name,
            password,
            confirmedPassword,
            email,
            username
        };

        let validateChecker = this.validation.validateRegister();

        if (validateChecker === true) {
            this.authentication.register(userData);
        }
    }


    render() {

        return (
            <div className="col s6 container row">

                <Tabs/>
                <form className="col s12" id="register-form" onSubmit={this.submitForm}>
                    <div className="input-field col s12">
                        <input id="name" type="text" required="" aria-required="" className="validate" onChange={this.updateValue} value={this.state.name} />
                        <label htmlFor="name">Name</label>
                        <span className="helper-text" data-error="Name is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="username" type="text" className="validate" required="" onChange={this.updateValue} value={this.state.username} />
                        <label htmlFor="username">Username</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={this.updateValue} value={this.state.email} />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Invalid email format" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" required="" onChange={this.updateValue} value={this.state.password} />
                        <label htmlFor="password">Password</label>
                        <span className="helper-text" data-error="password needs to be at least 6 characters long" data-success="success">at least 6 characters</span>
                    </div>
                    <div className="input-field col s12">
                        <input id="confirmedPassword" type="password" className="validate" onChange={this.updateValue} value={this.state.confirmedPassword} />
                        <label htmlFor="confirmedPassword">Confirm Password</label>
                        <span className="helper-text" data-error="password not matching" data-success="success">at least 6 characters</span>
                    </div>
                    <input type="submit" value="Register" className="btn waves-effect waves-light blue lighten-3" />
                    {/* <div >
                        {this.authentication.errorRequest}
                    </div> */}
                </form>

            </div>
        );
    }
}

export default Register;
