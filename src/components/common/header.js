import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authenticationService";

class Header extends Component {
    constructor(props) {
        super(props);
        this.authentication = new AuthenticationService();
    }
    render() {
        return (
            <header className="teal lighten-1">
                <nav className="transparent z-depth-0">
                    <div className="nav-wrapper container">
                        <a href="#" className="brand-logo left">BitBook</a>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/feed">Feed</Link></li>
                            <li><Link to="/people">People</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><a onClick={this.authentication.logout}>Logout </a> </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;