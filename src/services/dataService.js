import React, { Component } from "react";
import { SESSION_STORAGE_USER_KEY } from "../constants";

import FetchService from "./fetchService";
import Profile from "../entities/Profile";
import User from "../entities/User";
import Post from "../entities/Post";



class DataService {

    constructor() {
        this.fetch = new FetchService();
        this.top = 5;
        this.skip = 0;
    }

    fetchProfile(success, failure) {
        this.fetch.get("profile",
            profileData => {
                const profile = new Profile(profileData);
                sessionStorage.setItem(SESSION_STORAGE_USER_KEY, profile.userId);
                success(profile);
            },
            error => {
                failure(error);
            });
    }

    updateProfile(data, success, failure) {
        this.fetch.put("Profiles", data,
            response =>
                success(response),
            error =>
                failure(error));
    }

    fetchUsers(success, failure, top) {
        this.fetch.get(`users?$top=${top}&$skip=${this.skip}`,
            usersData => {
                const users = usersData.map(element => {
                    return new User(element);
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

    fetchAnyPosts(postType, id, successHandler, errorHandler) {
        this.fetch.get(`${postType}/${id}`,
            postData => {
                const posts = new Post(postData);

                successHandler(posts);
            },
            error => {
                errorHandler(error);
            }
        );
    }

    sendPost(data, successHandler, errorHandler) {
        const post = new Post(data);
        this.fetch.post(`${post.type}Posts`, post,
            post => {
                successHandler(post);
            },
            error => {
                errorHandler(error);
            });
    }

    fetchCommentsPosts(postId, successHandler, errorHandler) {
        this.fetch.get(`Comments?postId=${postId}`,
            CommentsData => {
                console.log(CommentsData);
                successHandler(CommentsData);
            },
            error => {
                console.log("fetchComments error" + error);
                errorHandler(error);
            }

        );
    }

    deletePost(id, successHandler, errorHandler) {
        this.fetch.delete(`Posts/${id}`,
            postdelete => {
                successHandler(postdelete);
            },
            error => {
                errorHandler(error);
            });
    }


    postComments(data, successHandler, errorHandler) {

        this.fetch.post("Comments", data,
            post => {
                successHandler(post);
            },
            error => {
                errorHandler(error);
            });
    }

    fetchCommentsPosts(successHandler, errorHandler) {
        this.fetch.get("Comments",
            CommentsData => {
                successHandler(CommentsData);
            },
            error => {
                errorHandler(error);
            }
        );
    }
}
export default DataService;