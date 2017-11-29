import React from "react";
import PropTypes from "prop-types";

class VideoPost extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        const url = this.props.post.videoUrl;
        const id = url.slice(-11);
        return (
            <div className="row teal lighten-3">
                <div className="col s12">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`}  allowFullScreen></iframe>
                </div>
                <div className="col s6">
                    <p className="left">{this.props.post.type} post </p>
                </div>
                <div className="col s6">
                    <p className="right">
                        Comments
                    </p>
                </div>
            </div>
        );
    }
}

VideoPost.propTypes = {
    post: PropTypes.object
};

export default VideoPost;
