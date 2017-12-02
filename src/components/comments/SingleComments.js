import React, { Component } from "react";
import PropTypes from "prop-types";


class SingleComments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {
                id: 0,
                dateCreated: "",
                body: "loading..",
                postId: 0,
                authorName: "Bla",
                authorId: 0
            }
        };
    }
    render() {
        return (
            <div className="row container commentDiv">

                <div className="col s6">
                    <strong> {this.props.authorName}</strong> {this.props.body}
                </div>

                <div className="col s6">
                    {this.props.date}
                </div>
            </div>
        );
    }
}


export default SingleComments;

SingleComments.propTypes = {
    authorName: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string
};