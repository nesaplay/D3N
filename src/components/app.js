import React from "react";

import { Switch, Route } from "react-router-dom";
import LoginPage from "./login-page/login-page";
import MainPage from "./mainPage";
// import AuthenticationService from '../services/authenticationService';

class App extends React.Component {
    constructor(props) {
        super(props);

        // this.isAuth = new AuthenticationService().isAuthenticated();
    }


    render() {
        // this.isAuth ? <MainPage /> : <LoginPage />
        return (

            <div>
                <LoginPage />
            </div>
        );
    }
}

export default App;
