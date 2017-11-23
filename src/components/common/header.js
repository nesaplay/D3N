import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">BitBook</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/feed">Feed</Link></li>
                            <li><Link to="/people">People</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;