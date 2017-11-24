import React, { Component } from "react";

import PeoplePattern from "./peoplePattern";

class People extends Component {
    constructor(props) {
        super(props);

        this.mockUser = {
            name: "Nenad",
            shortAbout: "short info about a user",
            lastLogin: "5:12PM",
            avatarUrl: "http://www.brimmunication.com/wp-content/uploads/2017/10/b1b10971de1dbe384e7ceda07665a4af-100x100.png"
        };
    }
    
    render() {
        return (
            <main className="container">
                <PeoplePattern user={this.mockUser} />
            </main>
        );
    }

}

export default People;