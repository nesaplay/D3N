import React, { Component } from "react";
import PropTypes from "prop-types";


class CreateComments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: ""
        };

        this.createCommentsHandler = this.createCommentsHandler.bind(this);
        this.sendComments = this.sendComments.bind(this);
    }

    sendComments(e) {
        console.log("1sendComments");
        // e.preventDefault();

        const comment = this.state.comments;

        this.props.giveComment(comment);

    }

    createCommentsHandler(event) {
        const comments = event.target.value;

        this.setState({
            comments
        });
    }


    render() {
        return (

            <div className="row container center">
                <div className="input-field col s9">
                    <input id="comment" type="text" onChange={this.createCommentsHandler} value={event.target.value} />
                    <label htmlFor="comment">Add your comment</label>
                    <span className="helper-text" ></span>
                </div>
                <div className="col s3">
                    <button onClick={this.sendComments} type="submit"  className="btn waves-effect waves-light red" >
                    Send
                    </button>
                </div>
            </div>

        );
    }
}

export default CreateComments;

CreateComments.propTypes = {
    giveComment: PropTypes.func
};