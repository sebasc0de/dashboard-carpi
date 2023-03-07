import { config, BASE_URL } from '../axios/role';
import { TABLE_CONFIG } from '../config/Notifications';
import { toast } from 'react-toastify';
import axios from 'axios';

class RoleService {
    async createNew(data, token) {
        try {
            const request = await axios.post(
                BASE_URL,
                { name: data },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            request && toast('Todo salio bien', TABLE_CONFIG);
            return request.data;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new RoleService();
