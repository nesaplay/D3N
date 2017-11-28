import React from "react";
import { Link } from "react-router-dom";
import { validate } from "jquery";

import AuthenticationService from "../../services/authenticationService";
import ValidationService from "../../services/validationService";
import Tabs from "./tabs";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameString: "",
            emailString: "",
            passwordString: "",
            usernameString: "",
            confirmedPassword: ""
        };
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.allRegisterData = this.allRegisterData.bind(this);
        this.passwordConfirmedHandler = this.passwordConfirmedHandler.bind(this);

        this.authentication = new AuthenticationService();
        this.validation = new ValidationService();
    }

    nameChangeHandler(event) {
        const usernameString = event.target.value;

        this.setState({
            usernameString
        });
    }
    usernameChangeHandler(event) {
        const nameString = event.target.value;

        this.setState({
            nameString
        });
    }
    emailChangeHandler(event) {
        const emailString = event.target.value;

        this.setState({
            emailString
        });
    }
    passwordChangeHandler(event) {
        const passwordString = event.target.value;

        this.setState({
            passwordString
        });
    }
    passwordConfirmedHandler(event) {
        const confirmedPassword = event.target.value;

        this.setState({
            confirmedPassword
        });
    }

    allRegisterData(event) {
        event.preventDefault();

        let userData = {
            name: this.state.nameString,
            password: this.state.passwordString,
            confirmedPassword: this.state.confirmedPassword,
            email: this.state.emailString,
            username: this.state.usernameString,
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
                <form className="col s12" id="register-form" onSubmit={this.allRegisterData}>
                    <div className="input-field col s12">
                        <input id="name" type="text" required="" aria-required="" className="validate" onChange={this.nameChangeHandler} value={event.target.value} />
                        <label htmlFor="name">Name</label>
                        <span className="helper-text" data-error="Name is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="username" type="text" className="validate" required="" onChange={this.usernameChangeHandler} value={event.target.value} />
                        <label htmlFor="username">Username</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={this.emailChangeHandler} value={event.target.value} />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Invalid email format" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" required="" onChange={this.passwordChangeHandler} value={event.target.value} />
                        <label htmlFor="password">Password</label>
                        <span className="helper-text" data-error="password needs to be at least 6 characters long" data-success="success">at least 6 characters</span>
                    </div>
                    <div className="input-field col s12">
                        <input id="confirm-password" type="password" className="validate" onChange={this.passwordConfirmedHandler} value={event.target.value} />
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <span className="helper-text" data-error="password not matching" data-success="success">at least 6 characters</span>
                    </div>
                    <input type="submit" value="Register" className="btn waves-effect waves-light blue lighten-3" />

                    <div >
                        {this.authentication.errorRequest}
                    </div>

                </form>

            </div>
        );
    }
}

export default Register;
