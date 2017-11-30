import React, { Component } from "react";
import PropTypes from "prop-types";

import { redirectService } from "../../services/redirectService";
import DataService from "../../services/dataService";
import CreateComments from "../comments/CreateComments";

class SinglePostPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                videoUrl: "dasdasdasdasdasdasdadas"
            },
            type: "",
            comments: ""
        };

        this.dataService = new DataService();

        this.findPosts = this.findPosts.bind(this);
        this.whichType = this.whichType.bind(this);
        this.success = this.success.bind(this);
        this.failure = this.failure.bind(this);
        this.whichRenderType = this.whichRenderType.bind(this);
        this.giveComments = this.giveComments.bind(this);
    }

    whichType() {
        console.log("radi whichtype");

        let type = "";
        if (this.props.match.params.type == "text") {
            type = "TextPosts";


        } else if (this.props.match.params.type == "video") {
            console.log("radi find");
            console.log(type);
            type = "VideoPosts";


        } else if (this.props.match.params.type == "image") {
            type = "ImagePosts";
        }
        this.findPosts(type);
    }

    findPosts(type) {

        this.dataService.fetchAnyPosts(type, this.props.match.params.singleId, this.success, this.failure);
        console.log("radi find");
    }

    success(post) {
        this.setState({
            post
        });
        console.log("radi success");


    }

    failure(error) {
        console.log(error);
    }

    whichRenderType() {
        console.log("radi whichRENDER");

        if (this.props.match.params.type === "text") {
            return <p>{this.state.post.text} </p>;

        } else if (this.props.match.params.type === "video") {
            console.log("radi" + this.state.post.videoUrl);
            const url = this.state.post.videoUrl;
            const id = url.slice(-11);
            return (<iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>);

        } else if (this.props.match.params.type === "image") {
            return (<img style={{ width: "300px" }} src={this.state.post.imageUrl} />);
        }
    }

    giveComments(comment) {
        const postId = this.state.post.id;
        const body = comment;
        const data = {
            postId,
            body
        };

        this.dataService.postComments(data,
            yes => {
                console.log(yes);
            },
            no => {
                console.log(no);
            });
    }

    componentDidMount() {
        console.log("radi didmount");

        this.whichType();

    }

    render() {
        return (
            <div className="needMargin">
                <div className="container row teal lighten-3">
                    <div className="col s12 center">
                        {this.whichRenderType()}
                    </div>
                </div>

                <CreateComments giveComments={this.giveComments} />
                

                <div className="row container center">

                </div>
            </div>
        );
    }

}


export default SinglePostPage;

SinglePostPage.propTypes = {
    match: PropTypes.object
};

