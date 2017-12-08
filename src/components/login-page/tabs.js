import React from 'react';
import { Link } from 'react-router-dom';

class Tabs extends React.Component {

    render() {
        return (
            <div className="row">
                <div className='col s12'>
                    <ul className="tabs">
                        <li className="tab col s6 "><Link to="/login">Login</Link></li>
                        <li className="tab col s6"><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tabs;