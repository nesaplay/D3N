import React, { Component } from "react";
import FetchService from "./fetchService";
import Profile from "../entities/Profile";

class DataService {
    constructor() {
        this.fetch = new FetchService();
    }

    fetchProfile(success, failure) {
        this.fetch.get("profile",
            profileData => {
                const profile = new Profile(profileData);
                success(profile);
            },
            error => {
                failure(error);
            });
    }
}

export default DataService;