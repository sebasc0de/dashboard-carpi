import axios from 'axios';
import { config } from '../axios/company';

class Repository {
    async getAll() {
        const response = await axios.get(config.GET_ALL);
        return response.data;
    }

    async getById(id) {
        const response = await axios.get(`${config.GET_BY_ID}/${id}`);
        return response.data;
    }
}

export default new Repository();
