import React, { Component } from "react";

class SingleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {
                id: 0,
                dateCreated: "",
                body: "loading..",
                postId: 0,
                authorName: "Bla",
                authorId: 0
            }
        };


    }
    render() {
        return (
            <div className="row">
                <p className="col s12">
                

                </p>


            </div>
        );
    }
}


export default SingleComponent;