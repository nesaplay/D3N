import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../common/header";
import Feed from "./feed";
import People from "./people";
import Profile from "./profile";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Header />
                <Switch>
                    <Route path="/feed" component={Feed} />
                    <Route path="/people" component={People} />
                    <Route path="/profile" component={Profile} />
                    <Route exact path="/" component={Profile} />
                </Switch>
            </main>
        );
    }
}

export default HomePage;