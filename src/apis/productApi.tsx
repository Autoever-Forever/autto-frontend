import axios from 'axios';

export const baseUrl = '/products';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
