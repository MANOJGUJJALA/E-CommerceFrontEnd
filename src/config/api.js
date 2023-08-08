
import axios from 'axios';
// const LOCALHOST='http://localhost:8080'
const LOCALHOST='https://fashionfinderbackend.onrender.com'

// http://localhost:8080
// https://fashionfinderbackend.onrender.com

export const API_BASE_URL = LOCALHOST

const api = axios.create({
  baseURL: API_BASE_URL,
});


const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
