import React from "react";

import Header from "../common/header";
import TextPost from "./textPost";

class Feed extends React.Component {

    render() {
        return (
            <div>
                <TextPost/>
            </div>
        );
    }
}

export default Feed;