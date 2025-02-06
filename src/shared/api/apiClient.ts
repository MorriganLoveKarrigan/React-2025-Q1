import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
};

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_SERVICE_API}/`,
  headers: { ...defaultHeaders },
});
