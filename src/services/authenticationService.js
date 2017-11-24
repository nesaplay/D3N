import React from "react";
import FetchService from "../services/fetchService";
import RedirectService from "./redirectService";
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../constants";

export default class AuthenticationService {
    constructor(props) {

        this.fetch = new FetchService();
        this.redirectToRoot = new RedirectService();
        

    }

    login(userData) {
        this.fetch.post("login", userData, this.successRequest, this.errorRequest);

    }
    register(userData) {
        this.fetch.post("register", userData);
        // window.location.assign("#/");
        this.redirectToRoot.goTo("");
    }



    logout() {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);

        // this.redirectToRoot.goTo("");
        window.location.assign("#/");
    }

    successRequest(data) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
        // this.redirectToRoot.goTo("profile");
        window.location.assign("#/profile");
    }

    errorRequest(error) {
        alert(error.response.data.error.message);
        
        
       
    }

    isUserAuthenticated() {
        return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    }

}

