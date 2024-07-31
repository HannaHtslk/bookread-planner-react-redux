import { createAsyncThunk } from '@reduxjs/toolkit';
import projectApi from '../../config/projectApi';

export const createPlan = createAsyncThunk(
  'planning/createPlan',
  async (planData, thunkAPI) => {
    try {
      const response = await projectApi.post('/planning', planData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updatePagesRead = createAsyncThunk(
  'planning/updatePagesRead',
  async (pages, thunkAPI) => {
    try {
      const response = await projectApi.patch('/planning', { pages });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCurrentPlan = createAsyncThunk(
  'planning/fetchCurrentPlan',
  async (_, thunkAPI) => {
    try {
      const response = await projectApi.get('/planning');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
