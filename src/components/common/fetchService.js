import fetch from "fetch";

export default class FetchService {

    headers() {
        return {
            "Content-Type": "application/json",
            "SessionId": "jTAAZCA5",
        };
    }

    get(url, handler) {

        fetch(url, {
            method: "GET",
            headers: this.headers()
        })
            .then(response => response.json())
            .then(jsonData => handler(jsonData))
            .catch(error => handler(error));
    }

    post(url, postData) {

        fetch(url, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: this.headers()
        })
            .then(response => response.json())
            .then(jsonData => console.log(jsonData))
            .catch(error => console.log(error));
    }

}