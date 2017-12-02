import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authenticationService";

class Header extends Component {
    constructor(props) {
        super(props);
        this.authentication = new AuthenticationService();
    }
    componentDidMount() {
        var elem = document.querySelector('.sidenav');
        var instance = new M.Sidenav(elem);
    }

    render() {
        return (
            <header className="menu">
                <nav className="transparent z-depth-0">
                    <div className="nav-wrapper container">
                        <a href="#" className="brand-logo left">BitBook</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger button-collapse right"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/feed">Feed</Link></li>
                            <li><Link to="/people">People</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><a onClick={this.authentication.logout}>Logout </a> </li>
                        </ul>
                        <ul id="mobile-demo" className="sidenav">
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