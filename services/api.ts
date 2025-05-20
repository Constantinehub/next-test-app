import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const SPOTIFY_GET_TOKEN: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SPOTIFY_TOKEN_URL,
});

const generateRequest = async <T, D = null>(
  api: AxiosInstance,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data: D,
  options: AxiosRequestConfig
): Promise<T> => {
  const headers = {
    ...api.defaults.headers.common,
    ...options.headers,
  };

  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    data,
    params: {
      ...options.params,
    },
    headers,
  };

  return api.request<T>(requestConfig).then((response) => response.data);
};

const get = <T>(
  api: AxiosInstance,
  url: string,
  options: AxiosRequestConfig
): Promise<T> => generateRequest<T>(api, 'GET', url, null, options);

const post = <T, D>(
  api: AxiosInstance,
  url: string,
  data: D,
  options = {} as AxiosRequestConfig
): Promise<T> => generateRequest<T, D>(api, 'POST', url, data, options);

const put = <T, D>(
  api: AxiosInstance,
  url: string,
  data: D,
  options = {} as AxiosRequestConfig
): Promise<T> => generateRequest<T, D>(api, 'PUT', url, data, options);

const del = <T, D>(
  api: AxiosInstance,
  url: string,
  data: D,
  options = {} as AxiosRequestConfig
): Promise<T> => generateRequest<T, D>(api, 'DELETE', url, data, options);

export { API, SPOTIFY_GET_TOKEN, get, post, put, del };
