import React from "react";
import PropTypes from "prop-types";

class VideoPost extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="row teal lighten-3">
                <h4 className="col s12">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_Dq8QnQtx5Y" frameBorder="0" allowFullScreen></iframe>
                </h4>
                <div className="col s6">
                    <p className="left">
                        Video Post
                    </p>
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

// VideoPost.propTypes = {
//     video: PropTypes.object
// };

export default VideoPost;
