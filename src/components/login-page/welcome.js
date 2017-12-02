import React from "react";
import { IPSUM } from "../../constants";

const Welcome = () => {

    return (
        <div className="col s6 ">
            <h1>Welcome to BitBook</h1>
            <p>{IPSUM}</p>
        </div>
    );
};

export default Welcome;