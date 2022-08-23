import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from 'constants/api-constants';
import AuthService from 'services/auth-service';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (values: LoginValues, thunkAPI) => {
    const data = await AuthService.login(values);

    localStorage.setItem(AUTH_TOKEN, data.token);
    return data;
  }
);

export const signOut = createAsyncThunk('auth/signOut', async () => {
  const data = await AuthService.logout();
  localStorage.removeItem(AUTH_TOKEN);
  return data;
});

export interface LoginValues {
  email: string;
  password: string;
}
