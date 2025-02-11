import axios from 'axios';

export const baseUrl = '/auth';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});
