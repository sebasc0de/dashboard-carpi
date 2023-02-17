import { config } from '../axios/user';
import axios from 'axios';

class UserService {
    async getUserById(id, token) {
        const request = await axios.get(config.EDIT_BY_ID + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return request.data;
    }
}

export default new UserService();
