import axios, { type AxiosInstance } from 'axios';

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? 'https://dummyjson.com';


export const axiosClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
