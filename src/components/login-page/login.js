import React from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../services/authenticationService";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameString: "",
            passwordString: ""
        };
        this.authentication = new AuthenticationService();

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
        this.authentication.login(userData);

    }

    render() {

        return (
            <div className="login/register-form  col s6 container">
                <div className="row">
                    <h3 className="col s6"><Link to="/login">Login</Link></h3>
                    <h3 className="col s6 "><Link to="/register">Register</Link></h3>
                </div>
                <form>
                    username:<input onChange={this.usernameChangeHandler} type="text" placeholder="username" value={this.state.emailString} />
                    <div className="error-username"> </div>

                    pass:<input onChange={this.passwordChangeHandler} type="password" placeholder="Password" value={this.state.passwordString} />
                    <div className="error-password"> </div>

                    <input onClick={this.loginData} type="submit" value="Login" className="btn waves-effect waves-light blue lighten-3" />
                    <div className="error-submit "> </div>

                </form>

            </div>
        );
    }
}

export default Login;