import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './login-page/login-page';
import HomePage from './profilePage/homePage';
import { authenticationService } from '../services/authenticationService';

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return authenticationService.isUserAuthenticated() 
            ?   <HomePage /> 
            :   <LoginPage />;

    }
}
