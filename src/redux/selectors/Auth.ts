import { RootState } from 'redux/store';

export const selectToken = (state: RootState) => state.auth?.token;
export const selectIsWrongAuthenticated = (state: RootState) =>
  state.auth?.isWrongAuthenticated;
export const selectIsLoading = (state: RootState) => state.auth?.isLoading;
export const selectIsLogoutLoading = (state: RootState) =>
  state.auth?.isLogoutLoading;
