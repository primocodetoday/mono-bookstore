import axios from 'axios';

export const bookstoreAPI = axios.create({
	baseURL: import.meta.env.VITE_APP_API,
});
