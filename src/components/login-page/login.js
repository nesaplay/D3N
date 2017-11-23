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
            errorString: ""
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

    loginData(event) {
        event.preventDefault();

        let userData = {
            username: this.state.usernameString,
            password: this.state.passwordString
        };

        let check = this.validation.validateLogin();
        if(check === true) {
            this.authentication.login(userData);
            if(this.authentication.login(userData)){
                this.redirectToRoot.goTo("/profile");
                // not sure about the if statement and redirection
            }
        }
    }
    // errorHandler(message){
        
    //     let errorString = sessionStorage.getItem("error");

    //     this.setState({
    //         errorString
    //     });
    // }

    render() {

        // if(this.state.errorString) {
        //     return <h2> {this.state.errorString}</h2>;
        // }        

        return (
            <div className="login/register-form  col s6 container row">
                <div className="row">
                    <h3 className="col s6"><Link to="/login">Login</Link></h3>
                    <h3 className="col s6 "><Link to="/register">Register</Link></h3>
                </div>
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
                        <input  type="submit" value="Login" className="btn waves-effect waves-light blue lighten-3" />
                    </div>

                </form>
                {/* <div className="card-panel red darken-4 " >
                    
                </div> */}

            </div>
        );
    }
}

export default Login;

