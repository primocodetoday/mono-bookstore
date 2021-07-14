import axios from 'axios';

export const bookstoreAPI = axios.create({
  baseURL: process.env.REACT_APP_API,
});
