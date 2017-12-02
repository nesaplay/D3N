import React, { Component } from "react";
import Header from "./common/header";

class MainPage extends Component {

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