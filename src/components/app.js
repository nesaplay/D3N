import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./login-page/login-page";
import HomePage from "./profilePage/homePage";
import AuthenticationService from "../services/authenticationService";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.authentication = new AuthenticationService();
    }


    render() {

        return this.authentication.isUserAuthenticated() ? <HomePage /> : <LoginPage />;
        // if (this.authentication.isUserAuthenticated()) {
        //     return <MainPage />;
        // }

        // return <LoginPage />;
    }
}

export default App;
