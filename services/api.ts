import { NewsParams } from '@/types/newsTypes';
// import { RequestResponse } from '@/types/qpiTypes';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  suppressErrorToast?: boolean;
}

interface RequestOptions {
  // params?: Record<string, string | number | boolean>;
  params?: NewsParams;
  headers?: Record<string, string>;
  suppressErrorToast?: boolean;
}

// interface RequestResponse<T> {
//   data?: T;
//   status?: string;
//   // [key: string]: unknown;
// }

const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const generateRequest = async <T, D = null>(
  api: AxiosInstance,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data: D,
  options: RequestOptions = {}
): Promise<T> => {
  const headers = {
    ...api.defaults.headers.common,
    ...options.headers,
  };

  const requestConfig: CustomAxiosRequestConfig = {
    method,
    url,
    data,
    params: {
      ...options.params,
      apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
    },
    headers,
    suppressErrorToast: options.suppressErrorToast,
  };

  return api.request<T>(requestConfig).then((response) => response.data);
};

const get = <T>(
  api: AxiosInstance,
  url: string,
  options: RequestOptions = {}
): Promise<T> => generateRequest<T>(api, 'GET', url, null, options);

const post = <T, D>(
  api: AxiosInstance,
  url: string,
  data: D,
  options: RequestOptions = {}
): Promise<T> => generateRequest<T, D>(api, 'POST', url, data, options);

const put = <T, D>(
  api: AxiosInstance,
  url: string,
  data: D,
  options: RequestOptions = {}
): Promise<T> => generateRequest<T, D>(api, 'PUT', url, data, options);

const del = <T, D>(
  api: AxiosInstance,
  url: string,
  data: D,
  options: RequestOptions = {}
): Promise<T> => generateRequest<T, D>(api, 'DELETE', url, data, options);

export { API, get, post, put, del };
