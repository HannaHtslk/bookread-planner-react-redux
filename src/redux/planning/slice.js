import { createSlice } from '@reduxjs/toolkit';
import { createPlan, fetchCurrentPlan, updatePagesRead } from './operations';

const initialState = {
  currentPlan: null,
  loading: false,
  error: null,
};

const planningSlice = createSlice({
  name: 'planning',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createPlan.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPlan = action.payload;
      })
      .addCase(createPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePagesRead.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePagesRead.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentPlan) {
          state.currentPlan.pagesRead = action.payload.pagesRead;
        }
      })
      .addCase(updatePagesRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentPlan.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPlan = action.payload;
      })
      .addCase(fetchCurrentPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default planningSlice.reducer;
