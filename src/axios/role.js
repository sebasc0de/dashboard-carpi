import { API_URL } from '../config/backend';

const endpoint = '/api/v1/roles';

// End point base
const BASE_URL = API_URL + endpoint;

const config = {
    GET_ALL: BASE_URL,
    GET_BY_ID: BASE_URL,
    EDIT_BY_ID: BASE_URL
};

export { BASE_URL, config };
