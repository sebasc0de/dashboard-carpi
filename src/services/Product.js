import axios from 'axios';
import { config } from '../axios/product';

class ProductService {
    constructor() {}

    // Change product visibility
    async toggleVisibility(id, published, token) {
        try {
            const toggle = await axios.patch(
                config.EDIT_BY_ID + id,
                { price: 520 },
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5haHVlbHNlYmFzdGlhbmRpYXpAZ21haWwuY29tIiwiaWQiOiIwMjZhOGVlNy1hZTUzLTQ3OTktYmE3NC0zMzA5MzkyYWNhZDMiLCJpYXQiOjE2NzYyODc0MDUsImV4cCI6MTY3NjM3MzgwNX0.UTCCbeuQg0jLoXZEE1qo9oEvNixJikx3z1HfpelH0-8`
                    }
                }
            );
            console.log(toggle);
        } catch (e) {
            console.log(e);
        }
    }

    // Edit product by id
    async editProductById(id, data, token) {
        try {
            const request = await axios.patch(
                config.EDIT_BY_ID + id,
                { data },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(request);
        } catch (e) {}
    }
}

export default new ProductService();
