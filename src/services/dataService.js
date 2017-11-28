import React, { Component } from "react";
import FetchService from "./fetchService";
import Profile from "../entities/Profile";
import Users from "../entities/users";
import Post from "../entities/posts";


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

    updateProfile(data, success, failure) {
        this.fetch.put("Profiles", data, (response) => success(response), (error) => failure(error));
    }

    fetchUsers(success, failure) {
        this.fetch.get("users",
            usersData => {
                const users = usersData.map(element => {
                    return new Users(element);
                });
                success(users);
            },
            error => {
                failure(error);
            }
        );
    }
    fetchUsersById(id, success, failure) {
        this.fetch.get(`users/${id}`,
            profileData => {
                const profile = new Profile(profileData);
                success(profile);
            },
            error => {
                failure(error);
            });
    }

    fetchTextPosts(successHandler, errorHandler) {
        this.fetch.get("Posts",
            postData => {
                const posts = postData.map(post => {
                    return new Post(post);
                });
                successHandler(posts);
            },
            error => {
                errorHandler(error);
            }

        );
    }

    sendPost(data, successHandler, errorHandler) {
        const post = new Post(data);
        this.fetch.post(`${post.type}Posts`, post, post => {
            successHandler(post);
        }, error => {
            errorHandler(error);
        });
    }
}

export default DataService;