import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/supervisor';

export const supervisorList = () => axios.get(REST_API_BASE_URL);

export const createSupervisor = (supervisor) => axios.post(REST_API_BASE_URL, supervisor);

export const getSupervisor = (supervisorId) => axios.get(REST_API_BASE_URL+'/'+supervisorId);

export const updateSupervisor = (supervisorId, supervisor) => axios.put(REST_API_BASE_URL+'/'+supervisorId, supervisor);

export const deleteSupervisor = (supervisorId) => axios.delete(REST_API_BASE_URL+'/'+supervisorId);