import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../common/header";
import Feed from "../feed/feed";
import People from "./people";
import ProfilePage from "./profile";
import SinglePostPage from "../feed/SinglePostPage";
import Footer from "../common/footer";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/feed" />
                    <Route exact path="/feed" component={Feed} />
                    <Route path="/feed/:type/:singleId" component={SinglePostPage} />
                    <Route exact path="/people" component={People} />
                    <Route path="/people/:id" component={ProfilePage} />
                    <Route path="/profile" component={ProfilePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default HomePage;