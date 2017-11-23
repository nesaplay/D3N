import React, { Component } from "react";
import Header from "./common/header";

class MainPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        return (
            <main>
                <Header />
                <div> Uspesno ste se ulogovali! </div>
            </main>
        );
    }
}

export default MainPage;