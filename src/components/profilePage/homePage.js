import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../common/header";
import Feed from "../feed/feed";
import People from "./people";
import ProfilePage from "./profile";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/feed" />
                    <Route path="/feed" component={Feed} />
                    <Route exact path="/people" component={People} />
                    <Route path="/people/:id" component={ProfilePage} />
                    <Route path="/profile" component={ProfilePage} />
                </Switch>
            </main>
        );
    }
}

export default HomePage;