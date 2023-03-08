import { config, BASE_URL } from '../axios/user';
import { TABLE_CONFIG } from '../config/Notifications';
import { toast } from 'react-toastify';
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

    async editUserById(id, data, token) {
        const request = await axios.patch(BASE_URL + id, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        request && toast('El usuario se modifico con exito', TABLE_CONFIG);
    }

    // Change user active state
    async toggleUserState(id, state, token) {
        try {
            const request = await axios.patch(
                config.EDIT_BY_ID + id,
                { isActive: state },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(request);
            if (request) toast('Excelente', TABLE_CONFIG);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new UserService();
