import React, { Component } from "react";
import { Link } from "react-router-dom";

import PeoplePattern from "./peoplePattern";
import DataService from "../../services/dataService";
import Search from "../common/search";

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            error: ""
        };

        this.dataService = new DataService();
        this.updateStateWithUsers = this.updateStateWithUsers.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.handleError=this.handleError.bind(this);
    }

    componentDidMount() {
        this.dataService.fetchUsers(this.updateStateWithUsers, this.handleError);
    }

    updateStateWithUsers(users) {
        this.setState({
            users,
            filteredUsers: users
        });
    }

    handleError(error) {
        console.warn(error);
    }

    searchHandler(searchString) {
       
        const currentUsers = this.state.users;

        if (searchString === "") {
            this.setState({
                filteredUsers: currentUsers
            });
            return;
        }

        const filteredUsers = currentUsers.filter((item) => {
            return item.name.includes(searchString);
        });

        this.setState({ filteredUsers });
    }


    render() {

        return (
            <main className="container">
                <div className="row">
                    <div className="col s2"></div>

                    <div className="col s8">
                        <Search onSearchRequested={this.searchHandler} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">{this.state.filteredUsers.map(user => {
                        return (<Link to={`/people/${user.id}`} key={user.id}>
                            <PeoplePattern user={user} key={user.id} />
                        </Link>);
                    })}</div>
                    <div className="col s2"></div>

                </div>
            </main>
        );
    }

}

export default People;