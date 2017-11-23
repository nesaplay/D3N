import React from "react";
import FetchService from "../services/fetchService";
import RedirectService from "../services/redirectService";
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../constants";

export default class AuthenticationService {
    constructor(props) {

        this.fetch = new FetchService();
        this.redirectToRoot = new RedirectService();

    }

    login(userData) {
        this.fetch.post("login", userData, this.successRequest, this.errorRequest);
        // this.redirectToRoot.goTo("");

    }
    register(userData) {
        this.fetch.post("register", userData);
        this.redirectToRoot.goTo("");
    }



    logout() {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);

        this.redirectToRoot.goTo("");
    }

    successRequest(data) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
        this.redirectToRoot.goTo("/");
    }

    errorRequest(error) {

        sessionStorage.setItem("error", error.response.data.error.message);
    }

    isUserAuthenticated() {
        return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    }

}

