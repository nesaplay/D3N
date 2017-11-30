import React from "react";
import PropTypes from "prop-types";

class TextPost extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.state = {
            posts: {
                text: "Loading post ...",
                id: ""
            }
        };

    }

    onDeleteButtonClick() {
        this.props.onPostDelete(this.props.post.id);
        
    }


    render() {
        return (
            <div className="row teal lighten-3">
                <h4 className="col s12">
                    {this.props.post.text}
                </h4>
                <div className="col s6">
                    <p className="left">
                        {this.props.post.type} post
                    </p>
                </div>
                <div className="col s6">
                    <p className="right">
                        {this.props.post.commentsNum} Comments
                    </p>
                </div>
                {this.props.enableDelete ? <button onClick={this.onDeleteButtonClick}>DELETE</button> : "" }
            </div>
        );
    }
}

TextPost.propTypes = {
    post: PropTypes.object,
    enableDelete: PropTypes.bool,
    onPostDelete: PropTypes.func
};

export default TextPost;