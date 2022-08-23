import { AUTH_TOKEN } from 'constants/api-constants';

export const AUTH_CONFIG = {
  token: localStorage.getItem(AUTH_TOKEN),
  isWrongAuthenticated: false,
  isLoading: false,
};
