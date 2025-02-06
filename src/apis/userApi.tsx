import axios from 'axios';

export const baseUrl = 'http://localhost:8081';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});
