import React, { Component } from "react";
import PropTypes from "prop-types"; 

class PeoplePattern extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { name, shortAbout, avatarUrl, lastLogin } = this.props.user;

        return (
            <article className="row teal lighten-5">
                <img src={avatarUrl} className="col s2" />
                <div className="col s8 row">
                    <h5 className="col s12">{name}</h5>
                    <p className="col s12">{shortAbout}</p>
                </div>
                <p className="col s2">{lastLogin}</p>
            </article>
        );
    }
}

PeoplePattern.propTypes = {
    user: PropTypes.object
};

export default PeoplePattern;