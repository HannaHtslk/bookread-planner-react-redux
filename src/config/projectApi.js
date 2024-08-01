import axios from 'axios';

const projectApi = axios.create({
  baseURL: 'https://bookread-backend.goit.global',
});

export default projectApi;
