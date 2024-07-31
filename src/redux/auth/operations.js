import { createAsyncThunk } from '@reduxjs/toolkit';
import projectApi, { setToken, clearToken } from '../../config/projectApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await projectApi.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await projectApi.post('/auth/login', userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await projectApi.post('/auth/logout');
      clearToken();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
