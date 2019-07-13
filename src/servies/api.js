import axios from 'axios';

const api = axios.create({
    baseURL: 'http://my-json-server.typicode.com/augustomarcelo/demo',
});

export default api;
