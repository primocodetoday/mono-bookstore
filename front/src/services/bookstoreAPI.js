import axios from 'axios';

export const bookstoreAPI = axios.create({
  baseURL: 'http://localhost:3001/api/',
});
