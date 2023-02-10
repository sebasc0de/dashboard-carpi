import { config } from '../axios/user';
import axios from 'axios';

class UserService {
    async getUserById(id) {
        return axios.get(config.EDIT_BY_ID + id);
    }
}

export default new UserService();
