import React from "react";
import { Link } from "react-router-dom";

class Tabs extends React.Component {
    render() {
        return (
            <div className="row">
                <ul className="tabs tab-demo z-depth-1">
                    <li className="tab col s6 "><Link className="active " to="/login">Login</Link></li>
                    <li className="tab col s6"><Link  to="/register">Register</Link></li>
                </ul>
            </div>
        );
    }
}

export default Tabs;