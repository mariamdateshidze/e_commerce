import axios from "axios";

export default function apiRequest(method, endpoint, data, headers = {}){
    const defaultHeaders = {};

    return axios({
        url: 'https://fakestoreapi.com/' + endpoint,
        method,
        data,
        headers: {... defaultHeaders, ...headers}
    })

    .then(response => response.data);
}