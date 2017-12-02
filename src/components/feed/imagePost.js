import React from "react";
import PropTypes from "prop-types";

class ImagePost extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <main className="row image-container">
                <div className="col s12 imgDiv">
                    <img className="responsive-img" src={this.props.post.imageUrl} />

                </div>
                <div className="col s6">
                    <p className = "left">{this.props.post.type} post </p>
                </div>
                <div className="col s6">
                    <p className="right">
                        Comments: {this.props.post.commentsNum}
                    </p>
                </div>
            </main>
        );
    }
}

ImagePost.propTypes = {
    post: PropTypes.object
};

export default ImagePost;