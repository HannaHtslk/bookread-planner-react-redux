import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export default authApi;

export const setToken = token => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authApi.defaults.headers.common.Authorization = '';
};
