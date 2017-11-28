import React, { Component } from "react";


class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    // Initialization methods
    initState() {
        return {
            posts: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
        };
    }

    initDropdown() {
        const elem = document.querySelector(".dropdown-trigger");
        const instance = new M.Dropdown(elem, { coverTrigger: false });
    }

    initPostButton() {
        const elem = document.querySelector(".fixed-action-btn");
        const instance = new M.FloatingActionButton(elem, {
            direction: "top",
            hoverEnabled: true,
            toolbarEnabled: false // Toolbar transition enabled
        });
    }

    // Render methods
    displayPosts() {
        return this.state.posts.map(post =>
            <div className="section center" key={post.id}>
                {/* <TextPost post={post} /> */} <div className="teal lighten-3">{post.id}</div>
            </div>
        );
    }

    displayFilter() {
        return (
            <div className="section right">
                <a className="dropdown-trigger btn" data-target="dropdown1">Filter Posts ⮟</a>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#">All posts</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Text posts</a></li>
                    <li><a href="#">Video posts</a></li>
                    <li><a href="#">Image posts</a></li>
                </ul>
            </div>
        );
    }

    displayAddPostButton() {
        return (
            <div className="section center">
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul className="">
                        <li><a className="btn-floating red"><i className="material-icons">textsms</i></a></li>
                        <li><a className="btn-floating blue darken-1"><i className="material-icons">videocam</i></a></li>
                        <li><a className="btn-floating green"><i className="material-icons">add_a_photo</i></a></li>
                    </ul>
                </div>
            </div>
        );
    }

    // Lifecycle methods
    componentDidMount() {
        this.initDropdown();
        this.initPostButton();
    }

    render() {

        return (
            <main>
                <div className="row container">
                    <div className="col s9">
                        {this.displayPosts()}
                    </div>
                    <div className="col s3">
                        {this.displayFilter()}
                        {this.displayAddPostButton()}
                    </div>
                </div>
            </main>
        );
    }
}

export default Feed;