import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="login/register-form">
                <div>
                    <h3><Link to="/login">Login</Link></h3>
                    <h3><Link to="/register">Register</Link></h3>
                </div>
                <form>
                    Name:<input type="text" placeholder="Name" value="" />

                    email:<input type="text" placeholder="Email Address" value="" />

                    pass:<input type="text" placeholder="Min 6 characters" value="" />

                    <input type="submit" value="Register" />
                    <div className="error-register"> </div>

                </form>

            </div>
        );
    }
}

export default Register;
