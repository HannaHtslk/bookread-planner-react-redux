import axios from 'axios';

const projectApi = axios.create({
  baseURL: 'https://bookread-backend.goit.global',
});

export default projectApi;

export const setToken = token => {
  projectApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  projectApi.defaults.headers.common.Authorization = '';
};
