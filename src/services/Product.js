import axios from 'axios';
import { TABLE_CONFIG } from 'config/Notifications';
import { toast } from 'react-toastify';
import { config } from '../axios/product';

class ProductService {
    constructor() {}

    // Change product visibility
    async toggleVisibility(id, published, token) {
        try {
            const toggle = await axios.patch(
                config.EDIT_BY_ID + id,
                { published },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            toggle && toast('Se ha cambiado con exito', TABLE_CONFIG);
        } catch (e) {
            console.log(e);
        }
    }

    // Edit product by id
    async editById(id, data, token) {
        try {
            const edit = await axios.patch(config.EDIT_BY_ID + id, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            edit && toast('Se ha modificado con exito, refresca la pagina', TABLE_CONFIG);

            return edit;
        } catch (e) {
            console.log(e);
        }
    }

    // Create product
    async create() {
        try {
            return axios.patch();
        } catch (e) {}
    }
}

export default new ProductService();
