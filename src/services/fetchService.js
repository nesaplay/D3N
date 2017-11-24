import axios from "axios";
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../constants";


export default class FetchService {

    headers() {

        let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);

        if (sessionId) {
            return { "SessionId": sessionId, "Key": API_KEY, "Content-Type": "application/json" };
        }
        return { "Key": API_KEY, "Content-Type": "application/json" };
    }

    get(url, successHandler, errorHandler) {

        axios({
            url: `${BASE_URL}${url}`,
            method: "get",
            headers: this.headers()
        })
            .then(response => successHandler(response.data))
            .catch(error => errorHandler(error.response));
    }

    post(url, postData, successHandler, errorHandler) {

        // axios.post(`${BASE_URL}${url}`,postData,{  
        //     headers: this.headers(),
        // })

        axios({
            method: "post",
            url: `${BASE_URL}${url}`,
            data: postData,
            headers: this.headers()
        })
            .then(response => successHandler(response.data))
            .catch(error => errorHandler(error));
    }

    put(url, postData, successHandler, errorHandler) {

        // axios.post(`${BASE_URL}${url}`,postData,{  
        //     headers: this.headers(),
        // })

        axios({
            method: "put",
            url: `${BASE_URL}${url}`,
            data: postData,
            headers: this.headers()
        })
            .then(response => successHandler(response.data))
            .catch(error => errorHandler(error));
    }

    

}