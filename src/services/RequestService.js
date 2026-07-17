import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/request";

export const requestList = () => axios.get(REST_API_BASE_URL);

export const createRequest = (request) => axios.post(REST_API_BASE_URL, request);

export const getRequest = (requestId) => axios.get(REST_API_BASE_URL+'/'+requestId) ;

export const getPendingRequest = (studentId) => {
    const params = {
        studentId: studentId
    };

    return axios.get(`${REST_API_BASE_URL}/pending`, { params });
};
// /api/request/pending?studentId=${studentId}

export const updateRequest = (requestId, request) => axios.put(REST_API_BASE_URL+'/'+requestId, request);

export const deleteRequest = (requestId) => axios.delete(REST_API_BASE_URL+'/'+requestId);