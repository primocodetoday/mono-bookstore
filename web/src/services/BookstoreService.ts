import { TState } from '@/context/reducers';
import axios from 'axios';

export const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API,
});

class BookstoreService {
	getAll(page = 1) {
		return api.get(`/books?page=${page}`)
			.then((response) => response.data)
	}
	getOne(id:string) {
		return api.get(`/books/${id}`)
			.then((response) => response.data)
	}
	order(state:TState) {
		return api.post('/orders', state)
			.then((response => response.data))
	}
}

export default new BookstoreService
