import axios from 'axios';
import { config } from '../axios/user';

class Repository {
    async getAll(token) {
        const response = await axios.get(config.GET_ALL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }

    async getById(id) {
        const response = await axios.get(`${config.GET_BY_ID}/${id}`);
        return response.data;
    }
}

export default new Repository();
