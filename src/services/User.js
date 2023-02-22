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

    // Change user active state
    async toggleUserState(id, state, token) {
        try {
            const request = await axios.patch(
                config.EDIT_BY_ID + id,
                { fullName: 'Pedrito' },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(request);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new UserService();
