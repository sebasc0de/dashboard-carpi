import axios from 'axios';
import { config } from '../axios/order';

class Repository {
    async getAll(token) {
        const response = await axios.get(config.GET_ALL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
}

export default new Repository();
