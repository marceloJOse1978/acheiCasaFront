// src/services/api.ts
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL; // URL da API, definida em .env.local
const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Chave da API, definida em .env.local

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador para adicionar token automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
