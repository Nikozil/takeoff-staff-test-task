import { message, notification } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';
import {
  API_BASE_URL,
  AUTH_TOKEN,
  TOKEN_PAYLOAD_KEY,
} from 'constants/api-constants';

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

const service = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (!token || !config.headers) return config;
    const parsedToken = JSON.parse(token);

    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${parsedToken}`;

    return config;
  },
  (error) => {
    notification.error({
      message: `Error ${error}`,
    });
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response === undefined) {
      message.error('Ошибка сети');
    }

    if (error.response.status === 401) {
      localStorage.removeItem(AUTH_TOKEN);
      // reloadToEntryRoute();
    }

    return Promise.reject(error);
  }
);

export default service;
