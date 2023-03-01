import axios from 'axios';
import { config, BASE_URL } from '../axios/company';

class Repository {
    async getAll() {
        const request = await axios.get(config.GET_ALL);
        return request.data;
    }

    async getById(id, token) {
        const request = await axios.get(config.GET_BY_ID + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return request.data;
    }

    async create(data, token) {
        const request = await axios.post(BASE_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return request.data;
    }

    async editById(id, data, token) {
        const request = await axios.patch(BASE_URL + id, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return request.data;
    }
}

export default new Repository();
