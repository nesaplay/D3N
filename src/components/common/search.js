import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state ={ searchString: "" };
        this.searchRequest = this.searchRequest.bind(this);
    }

    searchRequest(event){
        const searchString = event.target.value;

        this.setState({
            searchString
        });
        this.props.onSearchRequested(searchString);
    }

    render() {
        return (
            <div className="row">
                <input id="search" type="text" onChange={this.searchRequest} value={this.state.searchString} />
                <label htmlFor="search">Search</label>
                <span className="helper-text"></span>
            </div>
        );
    }

}

Search.propTypes = {
    onSearchRequested: PropTypes.func
};