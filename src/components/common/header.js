import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li> Home </li>
                        <li> Profile </li>
                        <li> Logout </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;