export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectUser = state => state.auth.user.name;
export const selectAuthError = state => state.auth.error;
export const selectIsRefreshing = state => state.auth.isRefreshing;
