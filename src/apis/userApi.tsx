import axios from 'axios';

export const baseUrl = 'http://54.180.239.207:8081/auth';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});
