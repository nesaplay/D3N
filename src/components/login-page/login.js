import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="login/register-form  col s6 container">
                <div className="row">
                    <h3 className="col s6"><Link to="/login">Login</Link></h3>
                    <h3 className="col s6 "><Link to="/register">Register</Link></h3>
                </div>
                <form>
                    email:<input type="text" placeholder="Email Address" value=""/> 
                    <div className="error-email"> </div>

                    pass:<input type="password" placeholder="Password" value=""/> 
                    <div className="error-password"> </div>

                    <input type="submit" value="Login" className="btn waves-effect waves-light blue lighten-3"/>
                    <div className="error-submit "> </div>
                    
                </form>
                
            </div>
        );
    }
}

export default Login;