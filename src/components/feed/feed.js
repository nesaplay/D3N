import React, { Component } from "react";
import TextPost from "./textPost";
import DataService from "../../services/dataService";
import Modal from "react-modal";


class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
        this.dataService = new DataService();

        this.mockPost = {
            text: "Vreme je za rucak",
            userId: 183,
            userDisplayName: "D3N Crew",
            type: "text"
        };
    }

    // Initialization methods
    initState() {
        return {
            posts: [],
            modalIsOpen: false
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

    bindEventHandlers() {
        this.fetchTextPosts = this.fetchTextPosts.bind(this);
        this.successHandler = this.successHandler.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
        this.openTextModal = this.openTextModal.bind(this);
        this.closeTextModal = this.closeTextModal.bind(this);

    }

    //Personal methods

    fetchTextPosts() {
        this.dataService.fetchTextPosts(this.successHandler, this.errorHandler);

    }

    makeTextPostRequest() {
        this.dataService.sendTextPost(this.mockPost);                
    }

    successHandler(posts) {
        this.setState({
            posts
        });
    }

    errorHandler(error) {
        console.warn(error);
    }

    // Render methods
    displayPosts() {
        return this.state.posts.map(post =>
            <div className="section center" key={post.id}>
                <TextPost post={post} />
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
                        <li onClick={() => this.openTextModal("text")}><a className="btn-floating red"><i className="material-icons">textsms</i></a></li>
                        <li onClick={() => this.openTextModal("video")}><a className="btn-floating blue darken-1"><i className="material-icons">videocam</i></a></li>
                        <li onClick={() => this.openTextModal("image")}><a className="btn-floating green"><i className="material-icons">add_a_photo</i></a></li>
                    </ul>
                </div>
            </div>
        );
    }

    displayModal() {
        if (this.state.modalType === "text") {
            return (
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.75)"
                        },
                        content: {
                            position: "absolute",
                            top: "300px",
                            left: "200px",
                            right: "200px",
                            bottom: "350px",
                            border: "1px solid #ccc",
                            background: "#fff",
                            overflow: "auto",
                            WebkitOverflowScrolling: "touch",
                            borderRadius: "4px",
                            outline: "none",
                            padding: "20px"
    
                        }
                    }}
                >
                    <div className="row">
                        <div className="col s12 row">
                            <h4 className="col s6">New text post</h4>
                            <p className="col s6">
                                <span className="right"><i style={{cursor: "pointer"}} onClick={this.closeTextModal} className="material-icons">close</i></span>
                            </p>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label htmlFor="textarea1">Post Content</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <button className="btn waves-effect waves-light right" type="submit" name="action">POST
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            );
        }
        if (this.state.modalType === "image") {
            return (
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.75)"
                        },
                        content: {
                            position: "absolute",
                            top: "300px",
                            left: "200px",
                            right: "200px",
                            bottom: "350px",
                            border: "1px solid #ccc",
                            background: "#fff",
                            overflow: "auto",
                            WebkitOverflowScrolling: "touch",
                            borderRadius: "4px",
                            outline: "none",
                            padding: "20px"
    
                        }
                    }}
                >
                    <div className="row">
                        <div className="col s12 row">
                            <h4 className="col s6">New image post</h4>
                            <p className="col s6">
                                <span className="right"><i style={{cursor: "pointer"}} onClick={this.closeTextModal} className="material-icons">close</i></span>
                            </p>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label htmlFor="textarea1">Image link</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <button className="btn waves-effect waves-light right" type="submit" name="action">POST
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            );
        }
        if (this.state.modalType === "video") {
            return (
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.75)"
                        },
                        content: {
                            position: "absolute",
                            top: "300px",
                            left: "200px",
                            right: "200px",
                            bottom: "350px",
                            border: "1px solid #ccc",
                            background: "#fff",
                            overflow: "auto",
                            WebkitOverflowScrolling: "touch",
                            borderRadius: "4px",
                            outline: "none",
                            padding: "20px"
    
                        }
                    }}
                >
                    <div className="row">
                        <div className="col s12 row">
                            <h4 className="col s6">New video post</h4>
                            <p className="col s6">
                                <span className="right"><i style={{cursor: "pointer"}} onClick={this.closeTextModal} className="material-icons">close</i></span>
                            </p>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label htmlFor="textarea1">YouTube video link</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <button className="btn waves-effect waves-light right" type="submit" name="action">POST
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            );
        }
    }
    //modal methods

    openTextModal(type) {
        this.setState({ modalIsOpen: true, modalType: type });
    }

    closeTextModal() {
        this.setState({ modalIsOpen: false });
    }

    // Lifecycle methods
    componentDidMount() {
        this.initDropdown();
        this.initPostButton();
        this.fetchTextPosts();
    }

    render() {
        return (
            <main>
                <div className="row container">
                    <div className="col s9">
                        {this.displayPosts()}
                        {this.displayModal()}
                    </div>
                    <div className="col s3">
                        {this.displayFilter()}
                        {this.displayAddPostButton()}
                    </div>

                </div>
            </main>
        );
    }
};

export default Feed;