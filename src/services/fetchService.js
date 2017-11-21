import fetch from "fetch";
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../../constants";

export default class FetchService {

    headers() {

        let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (sessionId) {

            return {
                "Content-Type": "application/json",
                "SessionId": sessionId,
                "API": API_KEY
            };
        }

        return {
            "Content-Type": "application/json",
            "API": API_KEY            
        };
    }

    get(url, successHandler, errorHandler) {

        fetch(`${BASE_URL}${url}`, {
            method: "GET",
            headers: this.headers()
        })
            .then(response => response.json())
            .then(jsonData => successHandler(jsonData))
            .catch(error => errorHandler(error));
    }

    post(url, postData) {

        fetch(`${BASE_URL}${url}`, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: this.headers()
        })
            .then(response => response.json())
            .then(jsonData => console.log(jsonData))
            .catch(error => console.log(error));
    }

}