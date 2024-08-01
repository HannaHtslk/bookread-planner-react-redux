import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, refreshUser } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isAuthenticated: false,
  loading: false,
  error: false,
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectUser: state => state.user.name,
    selectToken: state => state.token,
    selectIsAuthenticated: state => state.isAuthenticated,
    selectIsRefreshing: state => state.isRefreshing,
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, state => {
        return initialState;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
export const {
  selectIsAuthenticated,
  selectIsRefreshing,
  selectToken,
  selectUser,
} = authSlice.selectors;
export default authSlice.reducer;
