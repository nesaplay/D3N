import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "babel-polyfill";
import "./css/main.css";

import App from "./components/app";

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.querySelector(".app")
);
