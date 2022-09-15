import axios from 'axios';
import { BASE_URL } from '../Shared/BaseUrl';


const axiosinstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
});

export const sendRequest  = (config) => {
    return axiosinstance(config)
}

export const getrequest = (path) => {
    return sendRequest({
        method : 'GET',
        url : path
    })    
}

export const postrequest = (path, data) => {
    return sendRequest({
        method : 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        data: JSON.stringify(data),
        url : path
    })    
}

export const deleterequest = (path , id ) => {
    return sendRequest({
        method: "DELETE",
        url: path , id,
    })
}