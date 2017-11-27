import React, { Component } from "react";

import PeoplePattern from "./peoplePattern";

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: "0",
                    name: "Nevena",
                    aboutShort: "short info about a user",
                    lastPostDate: "5:12PM",
                    avatarUrl: "http://www.brimmunication.com/wp-content/uploads/2017/10/b1b10971de1dbe384e7ceda07665a4af-100x100.png"


                },
                {
                    id: "1",
                    name: "Nevena",
                    aboutShort: "short info about a user",
                    lastPostDate: "5:12PM",
                    avatarUrl: "http://www.brimmunication.com/wp-content/uploads/2017/10/b1b10971de1dbe384e7ceda07665a4af-100x100.png"


                },
            ]
        };
    }

    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">{this.state.users.map(user => {
                        return <PeoplePattern user={user} key={user.id} />;
                    })}</div>
                    <div className="col s2"></div>

                </div>
            </main>
        );
    }

}

export default People;