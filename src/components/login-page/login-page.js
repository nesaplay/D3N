import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Welcome from './welcome';
import Login from './login';
import Register from './register';
import Tabs from './tabs';


class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className="row landing-container z-depth-3">
                    <div className='col s6'>
                        <Welcome />
                    </div>
                    <div className='col s6'>
                        <div className='row'>
                            <div className='col s12'>
                                <Tabs />
                            </div>
                            <div className='col s12'>
                                <Switch>
                                    <Redirect exact from='/' to="/login" />
                                    <Route path='/login' component={Login} />
                                    <Route path='/register' component={Register} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
