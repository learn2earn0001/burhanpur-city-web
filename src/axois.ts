// src/axiosInstance.ts
import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios'; // 👈 Correct type for interceptor config

const instance = axios.create({
  baseURL: 'https://burhanpur-city-backend.vercel.app/api/',
});

// Correctly typed interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
