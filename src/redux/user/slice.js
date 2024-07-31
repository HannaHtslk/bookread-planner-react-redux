import { createSlice } from '@reduxjs/toolkit';
import { fetchUserBooks } from './operations';

const initialState = {
  books: [],
  email: '',
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserBooks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
        state.email = action.payload.email;
      })
      .addCase(fetchUserBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
