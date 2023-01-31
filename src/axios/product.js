import { API_URL } from '../config/backend';

const endpoint = '/api/v1/product';

// End point base
const BASE_URL = API_URL + endpoint;

export const config = {
    GET_ALL_PRODUCTS: BASE_URL,
    GET_BY_ID: BASE_URL
};
