import React from 'react';
import { fetchService } from '../services/fetchService';
import { redirectService } from './redirectService';
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from '../constants';

class AuthenticationService {

    login(userData) {
        fetchService.post('login', userData, this.successRequest, this.errorRequest);
    }

    register(userData) {
        fetchService.post('register', userData);
        redirectService.goTo('/');
    }

    logout() {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        redirectService.goTo('/');
    }

    successRequest(data) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
        redirectService.goTo('/profile');
    }

    errorRequest(error) {
        console.warn(error);
    }

    isUserAuthenticated() {
        return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    }
}

export const authenticationService = new AuthenticationService();