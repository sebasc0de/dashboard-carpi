import axios from 'axios';
import { config } from '../axios/auth';

class AuthService {
    async loginWithEmailAndPassword(data) {
        return axios.post(config.LOGIN, data);
    }

    async registerWithEmailAndPassword(data) {
        return axios.post(config.REGISTER, data);
    }

    async revalidateToken(oldToken) {
        return axios.get(config.REVALIDATE_TOKEN, {
            headers: {
                Authorization: `Bearer ${oldToken}`
            }
        });
    }
}

export default new AuthService();
