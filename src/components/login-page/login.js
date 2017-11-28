import React from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../services/authenticationService";
import ValidationService from "../../services/validationService";
import Tabs from "./tabs";


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
        // this.ErrorHandler = this.ErrorHandler.bind(this);
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

    loginData(event) {
        event.preventDefault();

        let userData = {
            username: this.state.usernameString,
            password: this.state.passwordString
        };

        let check = this.validation.validateLogin();
        if (check === true) {
            this.authentication.login(userData);
            
        }
    }
    // ErrorHandler() {
    //     console.log("radi errorHanler");
    //     let errorString = this.authentication.errorRequest;
    //     this.setState({
    //         errorString
    //     });
    // }
    

    render() {


        return (
            <div className="col s6 container row">

                <Tabs/>
                <form className="col s12" onSubmit={this.loginData} >

                    <div className="input-field col s12">
                        <input id="username" type="text" onChange={this.usernameChangeHandler} value={this.state.emailString} />
                        <label htmlFor="username">Username</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" onChange={this.passwordChangeHandler} type="password" value={this.state.passwordString} />
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

export default Login;

