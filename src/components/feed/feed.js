import React, { Component } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import TextPost from "./textPost";
import VideoPost from "./videoPost";
import ImagePost from "./imagePost";
import DataService from "../../services/dataService";
import { SESSION_STORAGE_USER_KEY } from "../../constants";


class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
        this.dataService = new DataService();
    }

    // Initialization methods
    initState() {
        return {
            posts: [],
            modalIsOpen: false,
            postContent: "",
            videoContent: "",
            imageContent: "",
            modalType: "",
            filterType: "all"
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
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.valueHandler = this.valueHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.filterVideoPosts = this.filterVideoPosts.bind(this);
        this.filterTextPosts = this.filterTextPosts.bind(this);
        this.filterImagePosts = this.filterImagePosts.bind(this);
        this.filterAllPosts = this.filterAllPosts.bind(this);

    }

    //Personal methods

    fetchTextPosts() {
        this.dataService.fetchTextPosts(this.successHandler, this.errorHandler);

    }

    successHandler(posts) {
        this.setState({
            posts
        });
    }

    errorHandler(error) {
        console.warn(error);
    }
    valueHandler(event) {
        if (event.target.id === "text") {
            this.setState({
                postContent: event.target.value
            });
        };
        if (event.target.id === "image") {
            this.setState({
                imageContent: event.target.value
            });
        };
        if (event.target.id === "video") {
            this.setState({
                videoContent: event.target.value
            });
        };

    }
    submitForm(event) {
        event.preventDefault();

        const data = {
            userId: parseInt(sessionStorage.getItem(SESSION_STORAGE_USER_KEY)),
            userDisplayName: "D3N",
        };

        if (this.state.modalType === "text") {
            data.text = this.state.postContent;
            data.type = "Text";
        };
        if (this.state.modalType === "video") {
            data.videoUrl = this.state.videoContent;
            data.type = "Video";
        };
        if (this.state.modalType === "image") {
            data.imageUrl = this.state.imageContent;
            data.type = "Image";
        };
        // callback functios dont have a goal
        this.dataService.sendPost(data,this.success,this.failure);
        this.closeModal();
    }

    // Render methods
    filterTextPosts() {
        this.setState({
            filterType: "text"
        });
    }
    filterImagePosts() {
        this.setState({
            filterType: "image"
        });
    }
    filterVideoPosts() {
        this.setState({
            filterType: "video"
        });
    }
    filterAllPosts() {
        this.setState({
            filterType: "all"
        });
    }
    displayPosts() {
        return this.state.posts.map(post => {

            if (this.state.filterType !== "all") {
                if (post.type === "text" && this.state.filterType === "text") {
                    return (<div className="section center" key={post.id}>
                        <Link to={`/feed/${post.type}/${post.id}`} key={post.id}>
                            <TextPost post={post} />
                        </Link>
                    </div>);
                }
                if (post.type === "video" && this.state.filterType === "video") {
                    return (<div className="section center" key={post.id}>
                        <Link to={`/feed/${post.type}/${post.id}`} key={post.id}>
                            <VideoPost post={post} />
                        </Link>
                    </div>);
                }
                if (post.type === "image" && this.state.filterType === "image") {
                    return (<div className="section center" key={post.id}>
                        <Link to={`/feed/${post.type}/${post.id}`} key={post.id}>
                            <ImagePost post={post} />
                        </Link>
                    </div>);
                }

            } else {
                if (post.type === "text") {
                    return (<div className="section center" key={post.id}>
                        <Link to={`/feed/${post.type}/${post.id}`} key={post.id}>
                            <TextPost post={post} />
                        </Link>
                    </div>);
                }
                if (post.type === "video") {
                    return (<div className="section center" key={post.id}>
                        <Link to={`/feed/${post.type}/${post.id}`} key={post.id}>
                            <VideoPost post={post} />
                        </Link>
                    </div>);
                }
                if (post.type === "image") {
                    return (<div className="section center" key={post.id}>
                        <Link to={`/feed/${post.type}/${post.id}`} key={post.id}>
                            <ImagePost post={post} />
                        </Link>
                    </div>);
                }

            }
        }

        );
    }

    displayFilter() {
        return (
            <div className="section right">
                <a className="dropdown-trigger btn" data-target="dropdown1">Filter Posts ⮟</a>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a onClick={() => this.filterAllPosts()}>All posts</a></li>
                    <li className="divider"></li>
                    <li><a onClick={() => this.filterTextPosts()}>Text posts</a></li>
                    <li><a onClick={() => this.filterVideoPosts()}>Video posts</a></li>
                    <li><a onClick={() => this.filterImagePosts()}>Image posts</a></li>
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
                        <li onClick={() => this.openModal("text")}><a className="btn-floating red"><i className="material-icons">textsms</i></a></li>
                        <li onClick={() => this.openModal("video")}><a className="btn-floating blue darken-1"><i className="material-icons">videocam</i></a></li>
                        <li onClick={() => this.openModal("image")}><a className="btn-floating green"><i className="material-icons">add_a_photo</i></a></li>
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
                                <span className="right"><i style={{ cursor: "pointer" }} onClick={this.closeModal} className="material-icons">close</i></span>
                            </p>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="text" className="materialize-textarea" onChange={this.valueHandler} value={this.state.postContent} ></textarea>
                                    <label htmlFor="text">Post Content</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <button className="btn waves-effect waves-light right" type="submit" name="action" onClick={this.submitForm}>POST
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
                                <span className="right"><i style={{ cursor: "pointer" }} onClick={this.closeModal} className="material-icons">close</i></span>
                            </p>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" id="image" onChange={this.valueHandler} value={this.state.imageContent} />
                                    <label htmlFor="image">Image link</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <button className="btn waves-effect waves-light right" type="submit" name="action" onClick={this.submitForm}>POST
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
                                <span className="right"><i style={{ cursor: "pointer" }} onClick={this.closeModal} className="material-icons">close</i></span>
                            </p>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" id="video" onChange={this.valueHandler} value={this.state.videoContent} />
                                    <label htmlFor="video">YouTube video link</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <button className="btn waves-effect waves-light right" type="submit" name="action" onClick={this.submitForm}>POST
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

    //Modal methods
    openModal(type) {
        this.setState({ modalIsOpen: true, modalType: type });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    // Lifecycle methods
    componentDidMount() {
        this.initDropdown();
        this.initPostButton();
        this.fetchTextPosts();
    }

    render() {
        console.log(this.state.filterType);
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