import React, { Component } from "react";
import PropTypes from "prop-types";

import { redirectService } from "../../services/redirectService";
import DataService from "../../services/dataService";
import CreateComments from "../comments/CreateComments";
import SingleComments from "../comments/SingleComments";

class SinglePostPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                videoUrl: "dasdasdasdasdasdasdadas"
            },
            type: "",
            comments: "",
            singleComments: []

        };
        this.dataService = new DataService();

        this.findPosts = this.findPosts.bind(this);
        this.whichType = this.whichType.bind(this);
        this.success = this.success.bind(this);
        this.failure = this.failure.bind(this);
        this.whichRenderType = this.whichRenderType.bind(this);
        this.giveComments = this.giveComments.bind(this);
        this.getAllComments = this.getAllComments.bind(this);
        this.successComments = this.successComments.bind(this);
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
        console.log("Post object", this.state.post);
    }

    failure(error) {
        console.log(error);
    }

    getAllComments() {
        console.log("3getallcomments" + this.props.match.params.singleId);
        this.dataService.fetchCommentsPosts(this.props.match.params.singleId, this.successComments, this.failure);
    }

    successComments(singleComments) {
        console.log("4object" + this.singleComments);
        this.setState({
            singleComments
        });
        console.log("5state" + this.state.singleComments);
    }

    // radi post i get metode
    giveComments(comment) {
        console.log("2prolazi give comments");
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

        this.getAllComments();
    }


    whichRenderType() {


        if (this.props.match.params.type === "text") {
            return <p>{this.state.post.text} </p>;

        } else if (this.props.match.params.type === "video") {
            const url = this.state.post.videoUrl;
            const id = url.slice(-11);
            return (<iframe width="800px" height="450px" src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>);

        } else if (this.props.match.params.type === "image") {
            return (<img width="800px" src={this.state.post.imageUrl} />);
        }
    }


    componentDidMount() {
        this.getAllComments();
        this.whichType();

    }

    render() {
        console.log(this.state.singleComments);
        return (
            <main className="needMargin">
                <div className="container row">
                    <div className="col s12 center">
                        {this.whichRenderType()}
                    </div>
                </div>

                <CreateComments giveComment={this.giveComments} />
                {this.state.singleComments.map(comment => {

                    return <SingleComments key={comment.id} date={comment.dateCreated} authorName={comment.authorName} body={comment.body} />;
                })}

                <div className="row container center">

                </div>
            </main>
        );
    }

}


export default SinglePostPage;

SinglePostPage.propTypes = {
    match: PropTypes.object
};

