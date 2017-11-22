import React from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../services/authenticationService";
import ValidationService from "../../services/validationService";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameString: "",
            passwordString: "",
        };
        this.authentication = new AuthenticationService();
        this.validation = new ValidationService();

        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.loginData = this.loginData.bind(this);
    }
    usernameChangeHandler(event) {
        const usernameString = event.target.value;

        this.setState({
            usernameString: usernameString
        });
    }
    passwordChangeHandler(event) {
        const passwordString = event.target.value;

        this.setState({
            passwordString
        });
    }

    loginData() {
        let userData = {
            username: this.state.usernameString,
            password: this.state.passwordString
        };
        this.validation.ultimateValidation(userData);
        if(this.validation.ultimateValidation(userData)) {
            this.authentication.login(userData);
        }
    }

    render() {

        return (
            <div className="login/register-form  col s6 container row">
                <div className="row">
                    <h3 className="col s6"><Link to="/login">Login</Link></h3>
                    <h3 className="col s6 "><Link to="/register">Register</Link></h3>
                </div>
                <form className="col s12" >
                    <div className="input-field col s12">
                        <input id="username" onSubmit={this.submitFormHandler} type="text" value={this.state.emailString} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="pass" onChange={this.passwordChangeHandler} type="password" value={this.state.passwordString} />
                        <label htmlFor="pass">Password</label>
                    </div>
                    <div className="input-field col s12">
                        <input onClick={this.loginData} type="submit" value="Login" className="btn waves-effect waves-light blue lighten-3" />
                    </div>

                </form>

            </div>
        );
    }
}

export default Login;

