import React from "react";
import FetchService from "../services/fetchService";
import { redirectService } from "./redirectService";
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../constants";

export default class AuthenticationService {
    constructor(props) {

        this.fetch = new FetchService();
        
    }

    login(userData) {
        this.fetch.post("login", userData, this.successRequest, this.errorRequest);
    }

    register(userData) {
        this.fetch.post("register", userData);
        redirectService.goTo("/");
    }

    logout() {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        redirectService.goTo("/");
    }

    successRequest(data) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
        redirectService.goTo("/profile");
    }

    errorRequest(error) {
        console.warn(error.response.data.error.message);
    }

    isUserAuthenticated() {
        return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    }

}

