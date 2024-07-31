import { createAsyncThunk } from '@reduxjs/toolkit';
import projectApi from '../../config/projectApi';

// Thunk to fetch user books and email
export const fetchUserBooks = createAsyncThunk(
  'user/fetchUserBooks',
  async (_, thunkAPI) => {
    try {
      const response = await projectApi.get('/user/books');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
