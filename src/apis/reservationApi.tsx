import axios from 'axios';

export const baseUrl = '/api';

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
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
