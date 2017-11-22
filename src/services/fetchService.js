import axios from "axios";
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../constants";


export default class FetchService {

    headers() {

        let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
        return (sessionId
            ? {"Key": API_KEY, "Content-Type" : "application/json"}
            : { "Key": API_KEY, "Content-Type" : "application/json"});
    }

    get(url, successHandler, errorHandler) {

        axios({
            url: `${BASE_URL}${url}`,
            method: "get",
            headers: this.headers()
        })
            .then(response => successHandler(response.data))
            .catch(error => errorHandler(error));
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

}