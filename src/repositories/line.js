import axios from 'axios';
import { config, BASE_URL } from '../axios/line';

class Repository {
    async getAll() {
        const response = await axios.get(config.GET_ALL);
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
