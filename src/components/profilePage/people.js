import React, { Component } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";


import PeoplePattern from "./peoplePattern";
import DataService from "../../services/dataService";
import Search from "../common/search";

class People extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
        this.createInstances();
    }

    // Initialization methods

    initState() {
        return {
            users: [],
            filteredUsers: [],
            error: ""
        };
    }

    bindEventHandlers() {
        this.updateStateWithUsers = this.updateStateWithUsers.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    createInstances() {
        this.dataService = new DataService();
    }

    // Personal methods

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

    // Lifecycle methods
    componentDidMount() {
        this.dataService.fetchUsers(this.updateStateWithUsers, this.handleError);
    }

    render() {

        let items = this.state.filteredUsers.map(user => {
            return (<Link to={`/people/${user.id}`} key={user.id}>
                <PeoplePattern user={user} key={user.id} />
            </Link>);
        });

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
                    <div className="col s8">
                        <InfiniteScroll
                            pageStart={0}
                            
                            hasMore={true || false}
                            loader={<div className="loader">Loading ...</div>}
                            useWindow={false}
                        >
                            {items}
                        </InfiniteScroll>
                    </div>
                    <div className="col s8">{}</div>
                    <div className="col s2"></div>

                </div>
            </main>
        );
    }
}

export default People;