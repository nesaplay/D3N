import React, { Component } from "react";

import PeoplePattern from "./peoplePattern";
import DataService from "../../services/dataService";

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.dataService = new DataService();
        this.updateStateWithUsers = this.updateStateWithUsers.bind(this);
    }

    componentDidMount() {
        this.dataService.fetchUsers(this.updateStateWithUsers, this.handleError);
    }

    updateStateWithUsers(users) {
        this.setState({ users });
    }

    handleError(error) {
        // console.log(error);
    }


    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">{this.state.users.map(user => {
                        return <PeoplePattern user={user} key={user.id} />;
                    })}</div>
                    <div className="col s2"></div>

                </div>
            </main>
        );
    }

}

export default People;