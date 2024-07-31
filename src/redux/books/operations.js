import { createAsyncThunk } from '@reduxjs/toolkit';
import projectApi from '../../config/projectApi';

export const addBook = createAsyncThunk(
  'books/addBook',
  async (bookData, thunkAPI) => {
    try {
      const response = await projectApi.post('/book', bookData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId, thunkAPI) => {
    try {
      await projectApi.delete(`/book/${bookId}`);
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const reviewBook = createAsyncThunk(
  'books/reviewBook',
  async ({ bookId, reviewData }, thunkAPI) => {
    try {
      const response = await projectApi.patch(
        `/book/review/${bookId}`,
        reviewData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
