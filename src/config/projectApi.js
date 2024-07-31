import axios from 'axios';

const projectApi = axios.create({
  baseURL: 'https://bookread-backend.goit.global',
});

export default projectApi;

export const setToken = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  goitApi.defaults.headers.common.Authorization = '';
};
