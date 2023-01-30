import { API_URL } from '../config/backend';

const endpoint = '/api/v1/auth';

// End point base
const BASE_URL = API_URL + endpoint;

export const config = {
    LOGIN: BASE_URL + '/signin',
    REGISTER: BASE_URL + '/signup',
    REVALIDATE_TOKEN: BASE_URL + '/checkAuthStatus'
};
