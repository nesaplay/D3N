import React, { Component } from "react";
import Modal from "react-modal";
import DataService from "../../services/dataService";

import TextPost from "./textPost";
import VideoPost from "./videoPost";
import ImagePost from "./imagePost";
import PropTypes from "prop-types";

class FeedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            type: ""
        };

        this.dataService = new DataService();

        this.findPosts = this.findPosts.bind(this);
        this.whichType = this.whichType.bind(this);
        this.success = this.success.bind(this);
        this.failure = this.failure.bind(this);
        this.whichRenderType = this.whichRenderType.bind(this);
    }

    whichType() {
        let type = "";
        if (this.props.match.params.type == "text") {
            type = "TextPosts";


        } else if (this.props.match.params.type == "video") {
            type = "VideoPosts";


        } else if (this.props.match.params.type == "image") {
            type = "ImagePosts";
        }
        this.findPosts(type);
    }

    findPosts(type) {

        this.dataService.fetchAnyPosts(type, this.props.match.params.singleId, this.success, this.failure);
    }

    success(post) {
        this.setState({
            post
        });
    }

    failure(error) {
        console.log("greska");
    }

    whichRenderType() {
        if (this.props.match.params.type === "text") {
            return <p>{this.state.post.text} </p>;

        } else if (this.props.match.params.type === "video") {
            const url = this.state.post.videoUrl;
            const id = url.slice(-11);
            return (<iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`}  allowFullScreen></iframe>);

        } else if (this.props.match.params.type === "image") {
            return (<img style={{ width: "300px" }} src={this.state.post.imageUrl} />);
        }
    }

    componentDidMount() {
        this.whichType();
        
    }

    render() {
        console.log(this.state.post.text);
        return (
            <div>
                {this.whichRenderType()}
            </div>
        );
    }

}


export default FeedList;

FeedList.propTypes = {
    match: PropTypes.object
};

