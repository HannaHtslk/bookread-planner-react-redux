import { createSlice } from '@reduxjs/toolkit';
import { addBook, deleteBook, reviewBook } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addBook.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(book => book.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(reviewBook.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reviewBook.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          book => book.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(reviewBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
