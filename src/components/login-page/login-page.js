import React, {Component} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Welcome from "./welcome";
import Login from "./login";
import Register from "./register";


class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row container ">
                <Welcome />
                <Switch>
                    <Redirect  exact from='/' to="/login" />
                    <Route  path='/login' component={Login} />
                    <Route  path='/register' component={Register} />
                </Switch>
            </div>

        );
    }
}

export default LoginPage;
