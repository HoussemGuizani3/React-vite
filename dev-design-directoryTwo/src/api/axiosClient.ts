import axios, { type AxiosInstance } from 'axios';   // methode bch njib beha data min api mou3ayin

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? 'https://dummyjson.com';


export const axiosClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // time to loead  to get data
  headers: {
    'Content-Type': 'application/json', // type of returned data
  },
});
