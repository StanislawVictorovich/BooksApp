import axios from 'axios';
import { SERVER_URL, BOOKS_API } from '../constants';
class DataService {
    getBooks() {
        return axios
            .get(`${SERVER_URL}${BOOKS_API}`);
    }
    deleteBook(id) {
        return axios
            .delete(`${SERVER_URL}${BOOKS_API}/${id}`);
    }
}

export default new DataService;
