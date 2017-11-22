import React from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../services/authenticationService";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameString: "",
            emailString: "",
            passwordString: "",
            usernameString: ""
        };
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.allRegisterData = this.allRegisterData.bind(this);

        this.authentication = new AuthenticationService();
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
    allRegisterData() {
        let userData = {
            name:this.state.nameString,
            password:this.state.passwordString,
            email: this.state.emailString,
            username: this.state.usernameString,
        };
        this.authentication.register(userData);
    }

    render() {

        return (
            <div className="login/register-form  col s6 container">

                <div className="row">
                    <h3 className="col s6"><Link to="/login">Login</Link></h3>
                    <h3 className="col s6"><Link to="/register">Register</Link></h3>
                </div>
                <form>
                    Name:<input onChange={this.nameChangeHandler} type="text" placeholder="Name" value={event.target.value} />
                    
                    Username:<input onChange={this.usernameChangeHandler} type="text" placeholder="Username" value={event.target.value} />

                    email:<input onChange={this.emailChangeHandler} type="email" placeholder="Email Address" value={event.target.value} />

                    pass:<input onChange={this.passwordChangeHandler} type="password" placeholder="Min 6 characters" value={event.target.value} />

                    <input onClick={this.allRegisterData} type="submit" value="Register" className="btn waves-effect waves-light blue lighten-3" />
                    <div className="error-register"> </div>

                </form>

            </div>
        );
    }
}

export default Register;
