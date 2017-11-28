import React from "react";
import PropTypes from "prop-types";

class ImagePost extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="row teal lighten-3">
                <h4 className="col s12">
                    image
                    {/* {this.props.video.videoUrl} */}
                </h4>
                <div className="col s6">
                    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hMWG1F75QWSu3hxuAGDyQoCvvP_T09rDxQ-05Y5Kj-LOv6IezA"/>
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

// ImagePost.propTypes = {
//     image: PropTypes.object
// };

export default ImagePost;