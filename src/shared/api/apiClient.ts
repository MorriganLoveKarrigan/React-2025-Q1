import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_SERVICE_API}/`,
  headers: { ...defaultHeaders },
});
