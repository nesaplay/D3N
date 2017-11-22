import React from "react";
import FetchService from "../services/fetchService";
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../constants";


export default class AuthenticationService {
    constructor(props){
        

        this.fetch = new FetchService();
    }
    
    login(userData) {
        this.fetch.post("login", userData,this.successRequest);

        sessionStorage.setItem(SESSION_STORAGE_KEY, API_KEY);
    }

   

    logout() {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        // here we redirect to root
    }

    successRequest(data){
        // here we redirect to root
    }

    isUserAuthenticated() {
        return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    }

}

