import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../common/header";
import Feed from "../feed/feed";
import People from "./people";
import ProfilePage from "./profile";
import SinglePostPage from "../feed/SinglePostPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/feed" />
                    <Route exact path="/feed" component={Feed} />
                    <Route path="/feed/:type/:singleId" component={SinglePostPage} />
                    <Route exact path="/people" component={People} />
                    <Route path="/people/:id" component={ProfilePage} />
                    <Route path="/profile" component={ProfilePage} />
                </Switch>
            </main>
        );
    }
}