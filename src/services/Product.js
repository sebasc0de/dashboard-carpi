import axios from 'axios';
import { config } from '../axios/product';

class ProductService {
    constructor() {}

    // Change product visibility
    async toggleVisibility(id, published, token) {
        try {
            const toggle = await axios.patch(
                config.EDIT_BY_ID + id,
                { published: true },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log('product changed', toggle);
            return toggle;
        } catch (e) {
            console.log(e);
        }
    }

    // Edit product by id
    async editById(id, data, token) {
        return await axios.patch(config.EDIT_BY_ID + id, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    // Create product
    async create() {
        try {
            return axios.patch();
        } catch (e) {}
    }
}

export default new ProductService();
