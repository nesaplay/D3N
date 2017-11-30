import React from "react";
import PropTypes from "prop-types";

class ImagePost extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="row teal lighten-3">
                <div className="col s12">
                    <img style={{ width: "300px" }} src={this.props.post.imageUrl} />

                </div>
                <div className="col s6">
                    <p className = "left">{this.props.post.type} post </p>
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

ImagePost.propTypes = {
    post: PropTypes.object
};

export default ImagePost;