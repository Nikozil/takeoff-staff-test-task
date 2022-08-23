import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut } from 'redux/actions/Auth';
import { AUTH_CONFIG } from '../../config/AuthConfig';

const initAuth = { ...AUTH_CONFIG };

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initAuth,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.token = token;
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.token = null;
        state.isWrongAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.token = null;
      });
  },
});

export default AuthSlice.reducer;
