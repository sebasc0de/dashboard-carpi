import axios from 'axios';
import { config, BASE_URL } from '../axios/company';

class Repository {
    async getAll() {
        const response = await axios.get(config.GET_ALL);
        return response.data;
    }

    async getById(id, token) {
        const response = await axios.get(config.GET_BY_ID + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }

    async create(data, token) {
        const response = await axios.post(BASE_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
}

export default new Repository();
