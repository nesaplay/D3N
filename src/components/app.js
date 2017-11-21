import React from "react";

import { Switch, Route } from "react-router-dom";
import LoginPage from "./login-page/login-page";
import MainPage from "./mainPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} />
                    <Route exact path="/test/test" component={MainPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
