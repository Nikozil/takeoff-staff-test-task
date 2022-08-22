import { createSlice } from '@reduxjs/toolkit';
import { AUTH_CONFIG } from '../../config/AuthConfig';

const initAuth = { ...AUTH_CONFIG };

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initAuth,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
