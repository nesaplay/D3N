import React from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../services/authenticationService";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailString: "",
            passwordString: ""
        };
        this.authentication = new AuthenticationService();

        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.loginData = this.loginData.bind(this);
    }
    emailChangeHandler(event) {
        const emailString = event.target.value;

        this.setState({
            emailString: emailString
        });
    }
    passwordChangeHandler(event) {
        console.log(this.state.passwordString);
        const passwordString = event.target.value;

        this.setState({
            passwordString
        });
    }

    loginData() {
        console.log("dadasdads");
        let userData = {
            username: this.state.emailString,
            password: this.state.passwordString
        };
        console.log(userData);
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
                    email:<input onChange={this.emailChangeHandler} type="text" placeholder="Email Address" value={this.state.emailString} />
                    <div className="error-email"> </div>

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